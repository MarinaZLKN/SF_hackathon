from django.dispatch import receiver
from .models import Driver
from backend.services import send_to_bitrix
from django.db.models.signals import post_save


@receiver(post_save, sender=Driver)
def send_lead_to_bitrix(sender, instance, **kwargs):
    send_to_bitrix(instance)

