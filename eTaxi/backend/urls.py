from django.urls import path, include
from . import views
from .views import *
from rest_framework.routers import DefaultRouter
from rest_framework_nested.routers import NestedSimpleRouter

router = DefaultRouter()
router.register(r'cities', CityViewSet)
router.register(r'cars', CarViewSet)
router.register(r'offices', OfficeViewSet)

nested_router_city = NestedSimpleRouter(router, r'cities', lookup='city')
nested_router_city.register(r'cars', CarViewSet, basename='city-cars')
nested_router_city.register(r'feedback', FeedbackViewSet, basename='city-feedback')
nested_router_city.register(r'offices', OfficeViewSet, basename='city-offices')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(nested_router_city.urls)),
    path('getcity/', GetCityInfoByCoordinates.as_view()),
    path('sendbitrix', SendLeadToBitrix.as_view()),
]