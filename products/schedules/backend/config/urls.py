from django.urls import path, include
from django.contrib import admin

from schedule.urls import schedule_router

urlpatterns = [
    # Django
    path('admin/', admin.site.urls),

    # Libs

    # My Apps
    path('api/v1/schedules', include(schedule_router.urls)),
]
