from django.urls import path, include
from rest_framework import routers

from .views import UsuariosViewSet  # from .views import UserAPIView, ListaUsuarios


users_router = routers.DefaultRouter()
users_router.register('', UsuariosViewSet, basename='usuarios')
