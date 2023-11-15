from rest_framework import viewsets
from .models import *
from .serializers import *


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
    lookup_field = 'slug'