# Generated by Django 2.2.16 on 2020-10-19 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0008_remove_customtext_titlef"),
    ]

    operations = [
        migrations.AddField(
            model_name="customtext",
            name="fgdgd",
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
