from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *
from .services import find_nearest_city, send_to_bitrix

class SendLeadToBitrix(APIView):
    def post(self, request):
        data = request.data

        name = data.get('name')
        phone_number = data.get('phone')
        comment = data.get('comment')

        send_to_bitrix(name, phone_number, comment)

        return Response({'status': 'success'})

class GetCityInfoByCoordinates(APIView):
    def post(self, request):
        try:
            data = request.data
            lat = float(data.get('lat'))
            lon = float(data.get('lon'))

            nearest_city = find_nearest_city(lat, lon)

            if nearest_city:
                city = City.objects.get(city=nearest_city)
                serializer = CitySerializer(city)

                offices = Office.objects.filter(city=city)
                office_serializer = OfficeSerializer(offices, many=True)

                cars = Car.objects.filter(city=city)
                car_serializer = CarSerializer(cars, many=True)

                feedback = Feedback.objects.filter(city=city)
                feedback_serializer = FeedbackSerializer(feedback, many=True)

                # employees = Employee.objects.filter(city=city)
                # employee_serializer = EmployeeSerialiazer(employees, many=True)

                return Response({
                    'city': serializer.data,
                    'offices': office_serializer.data,
                    'cars': car_serializer.data,
                    'feedback': feedback_serializer.data,
                    # 'employees': employee_serializer.data,
                })
            else:
                print("City not found")
                return Response({'error': 'Город не найден'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class OfficeViewSet(viewsets.ModelViewSet):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer

    def get_queryset(self):
        city_slug = self.kwargs.get('city_slug')
        if city_slug:
            city = City.objects.get(slug=city_slug)
            return Office.objects.filter(city=city)
        else:
            return Office.objects.all()


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    def get_queryset(self):
        city_slug = self.kwargs.get('city_slug')
        if city_slug:
            city = City.objects.get(slug=city_slug)
            return Car.objects.filter(city=city)
        else:
            return Car.objects.all()        


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

    def get_queryset(self):
        city_slug = self.kwargs.get('city_slug')
        if city_slug:
            city = City.objects.get(slug=city_slug)
            return Feedback.objects.filter(city=city)
        else:
            return Feedback.objects.all()


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    # lookup_field = 'slug'