# Generated by Django 2.2.16 on 2020-10-19 07:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0007_customtext_titlef"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="customtext",
            name="titlef",
        ),
    ]
