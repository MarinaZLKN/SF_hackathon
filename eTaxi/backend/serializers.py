from rest_framework import serializers
from .models import *

class OfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Office
        fields = ('address',)


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('taxi_class', 'model', 'transmission', 'engine_capacity', 'fuel', 'rental_price', 'image')


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('name', 'text', 'url_video')


class EmployeeSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('image', 'name', 'position', 'quote')


class CitySerializer(serializers.ModelSerializer):
    # offices = OfficeSerializer(many=True)
    offices = serializers.StringRelatedField(many=True)
    cars = CarSerializer(many=True)
    feedback = FeedbackSerializer(many=True)
    employees = EmployeeSerialiazer(many=True)

    class Meta:
        model = City
        fields = ('id', 'city', 'phone_number', 'working_hours', 'latitude', 'longitude', 'offices', 'cars', 'employees', 'feedback')


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = '__all__'

