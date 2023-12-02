from rest_framework import viewsets, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *
from .services import find_nearest_city


class DriverAPICreate(generics.CreateAPIView):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer


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


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    # lookup_field = 'slug'