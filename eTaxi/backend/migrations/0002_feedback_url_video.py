# Generated by Django 4.2.7 on 2023-11-11 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedback',
            name='url_video',
            field=models.URLField(blank=True, null=True),
        ),
    ]
