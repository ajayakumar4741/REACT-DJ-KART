from . import views
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
   #  TokenRefreshView,
)

urlpatterns = [
   path('', views.getRoutes, name='getRoutes'),
   path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('products',views.getProducts,name='products'),
   path('product/<int:pk>',views.getProduct,name='product'),
   path('users/profile/', views.getUserProfile, name='profile')
]