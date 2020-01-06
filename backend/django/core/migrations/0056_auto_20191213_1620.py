# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-12-13 16:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0055_auto_20191212_2153"),
    ]

    operations = [
        migrations.AddField(
            model_name="metadata", name="user_url", field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name="projectmetadata",
            name="has_user_url",
            field=models.BooleanField(default=False),
        ),
    ]
