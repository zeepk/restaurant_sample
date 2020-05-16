from django.contrib import admin
from .models import (MenuCategory, MenuItem)

class MenuCategoryAdmin(admin.ModelAdmin):
    field = '__all__'

class MenuItemAdmin(admin.ModelAdmin):
    field = '__all__'

admin.site.register(MenuCategory, MenuCategoryAdmin)
admin.site.register(MenuItem, MenuItemAdmin)
