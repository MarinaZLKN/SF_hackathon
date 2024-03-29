from django.contrib import admin
from .models import *

# Register your models here.

class DriverAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'comment', 'created_at')


admin.site.register(City)
admin.site.register(Car)
admin.site.register(Office)
admin.site.register(Feedback)
admin.site.register(Employee)
admin.site.register(Driver, DriverAdmin)
