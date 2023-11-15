from geopy.distance import geodesic
from haversine import haversine
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