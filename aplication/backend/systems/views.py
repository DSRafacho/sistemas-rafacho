from rest_framework import viewsets

from .models import System
from .serializers import SystemsSerializer


class SystemsViewSet(viewsets.ModelViewSet):
    queryset = System.objects.all().order_by('id')
    serializer_class = SystemsSerializer
