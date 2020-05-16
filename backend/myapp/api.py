from myapp.models import (MenuItem, MenuCategory)
from rest_framework import viewsets, permissions
from .serializers import (MenuCategorySerializer, MenuItemSerializer)


class MenuCategoryViewSet(viewsets.ModelViewSet):
    queryset = MenuCategory.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MenuCategorySerializer

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MenuItemSerializer