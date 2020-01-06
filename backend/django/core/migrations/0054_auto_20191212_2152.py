# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-12-12 21:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0053_auto_20191212_1856"),
    ]

    operations = [
        migrations.RemoveField(model_name="metadata", name="post_date1",),
        migrations.RemoveField(model_name="metadata", name="post_string1",),
        migrations.RemoveField(model_name="metadata", name="post_string2",),
        migrations.RemoveField(model_name="metadata", name="user_string1",),
        migrations.RemoveField(model_name="metadata", name="user_string2",),
        migrations.RemoveField(model_name="projectmetadata", name="media_source",),
        migrations.RemoveField(model_name="projectmetadata", name="post_date1_name",),
        migrations.RemoveField(model_name="projectmetadata", name="post_string1_name",),
        migrations.RemoveField(model_name="projectmetadata", name="post_string2_name",),
        migrations.RemoveField(model_name="projectmetadata", name="user_string1_name",),
        migrations.RemoveField(model_name="projectmetadata", name="user_string2_name",),
        migrations.AddField(
            model_name="projectmetadata",
            name="has_title",
            field=models.BooleanField(default=False),
        ),
    ]
