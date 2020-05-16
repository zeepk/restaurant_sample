from django.db import models


class MenuCategory(models.Model):
    title = models.CharField(max_length=100)
    
    class Meta:
        verbose_name_plural = "Menu Categories"

    def __str__(self):
        return self.title

class MenuItem(models.Model):
    title = models.CharField(null=False, max_length=100)
    details = models.TextField(max_length=500, null=True, blank=True)
    price = models.DecimalField(default=0.00, blank=True, max_digits=6, decimal_places=2)
    image = models.ImageField(null=True, blank=True)
    category = models.ForeignKey('MenuCategory', null=True, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Menu Items"

    def __str__(self):
        return self.title
