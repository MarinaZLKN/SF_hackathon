from django.urls import path, include
from .views import DriverAPICreate
from .views import *
from rest_framework.routers import DefaultRouter
from rest_framework_nested.routers import NestedSimpleRouter

router = DefaultRouter()
router.register(r'cities', CityViewSet)

nested_router_city = NestedSimpleRouter(router, r'cities', lookup='city')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(nested_router_city.urls)),
    path('getcity/', GetCityInfoByCoordinates.as_view()),
    # path('sendbitrix', SendLeadToBitrix.as_view()),
    path('sendbitrix', DriverAPICreate.as_view()),
]