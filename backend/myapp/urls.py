from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from .api import (MenuItemViewSet, MenuCategoryViewSet)

router = routers.DefaultRouter()
router.register('api/menu-categories', MenuCategoryViewSet, 'Menu Categories')
router.register('api/menu-items', MenuItemViewSet, 'Menu Items')


urlpatterns = router.urls

if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)