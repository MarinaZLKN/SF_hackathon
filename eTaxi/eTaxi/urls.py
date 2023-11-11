from django.contrib import admin
from django.urls import path, include
from .yasg import urlpatterns as documentation_api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('backend.urls')),
    path('api/', include('frontend.urls')),
]

urlpatterns += documentation_api
