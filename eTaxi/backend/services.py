from geopy.distance import geodesic
from haversine import haversine
from fast_bitrix24 import Bitrix
from .models import City

def find_nearest_city(lat, lon):
    cities = City.objects.all()
    cities_dict = {}

    for city in cities:
        city_coords = (city.latitude, city.longitude)
        user_coords = (lat, lon)
        distance = haversine(city_coords, user_coords)
        cities_dict[distance] = city
        
    return cities_dict[min(cities_dict)]


def send_to_bitrix(instance):
    webhook_url = 'https://b24-t0gi8k.bitrix24.ru/rest/1/uttd7fwuv1bhgq61/'
    b = Bitrix(webhook_url)
    method = 'crm.lead.add'
    
    data = [
        {
            'fields':{
                # 'TITLE': 'Новый лид',
                'NAME': instance.name,
                'PHONE':[
                    {'VALUE': instance.phone_number}
                ],
                'COMMENTS': instance.comment,
                # 'ADDRESS_CITY': city
            } 
        }   
    ]
                    
    b.call(method, data)