from rest_framework.routers import SimpleRouter
from .views import SystemsViewSet

systems_router = SimpleRouter()
systems_router.register('', SystemsViewSet)
