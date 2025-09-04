from . import views
from django.urls import path

urlpatterns = [
   path('', views.getRoutes, name='getRoutes'),
   path('products',views.getProducts,name='products'),
   path('product/<int:pk>',views.getProduct,name='product')
]