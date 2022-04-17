from django.contrib import admin
from .models import System


@admin.register(System)
class ProductAdmin(admin.ModelAdmin):
    fields = ['name', 'description']
