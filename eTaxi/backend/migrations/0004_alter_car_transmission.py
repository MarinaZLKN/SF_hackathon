# Generated by Django 4.2.7 on 2023-11-11 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_alter_car_transmission'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='transmission',
            field=models.CharField(choices=[('AT', 'АКПП'), ('MT', 'МКПП')], default='AT', max_length=2),
        ),
    ]