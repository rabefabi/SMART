# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2020-01-06 00:00
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0058_auto_20200103_1249"),
    ]

    operations = [
        migrations.RemoveField(model_name="projectmetadata", name="project",),
        migrations.DeleteModel(name="ProjectMetaData",),
    ]
