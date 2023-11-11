from django.db import models


# class User(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     latitude = models.FloatField(null=True, blank=True)
#     longitude =models.FloatField(null=True, blank=True)

class City(models.Model):
    city = models.CharField(max_length=64)
    phone_number = models.CharField(max_length=16)
    working_hours = models.CharField(max_length=128)
    slug = models.SlugField(unique=True)

    def __str__(self) -> str:
        return self.city
    

class Office(models.Model):
    city = models.ForeignKey(City, related_name='offices', on_delete=models.CASCADE)
    address = models.CharField(max_length=128)

    def __str__(self) -> str:
        return self.address
    

class Car(models.Model):
    city = models.ForeignKey(City, related_name='cars', on_delete=models.CASCADE)
    image = models.FileField(upload_to='images', null=True, blank=True)
    model = models.CharField(max_length=128)
    AUTOMATIC_TRANSMISSION = 'АКПП'
    MANUAL_TRANSMISSION = 'МКПП'
    transmission_choises = (
        (AUTOMATIC_TRANSMISSION, 'AT'),
        (MANUAL_TRANSMISSION, 'MT'),
    )
    transmission = models.CharField(max_length=4,choices=transmission_choises, default=AUTOMATIC_TRANSMISSION)
    engine_capacity = models.DecimalField(max_digits=2, decimal_places=1)
    fuel_type = models.CharField(max_length=255)
    rental_price = models.IntegerField()

    def __str__(self) -> str:
        return self.model
    

class Feedback(models.Model):
    city = models.ForeignKey(City, related_name='feedback', on_delete=models.CASCADE)
    name = models.CharField(max_length=64)
    text = models.TextField(null=True, blank=True)
    url_video = models.URLField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name
