from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Products(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product_name = models.CharField(max_length=20)
    image = models.ImageField()
    product_brand = models.CharField(max_length=20)
    product_category = models.CharField(max_length=20, null=True, blank=True)
    product_info = models.TextField()
    rating = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    numReviews=models.IntegerField(null=True,blank=True,default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True)
    in_stock = models.PositiveBigIntegerField(null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    class Meta:
        verbose_name_plural = "Products"
    
    def __str__(self):
        return self.product_name
    
