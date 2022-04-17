from rest_framework.routers import SimpleRouter

from schedule.views import ScheduleModelViewSet


schedule_router = SimpleRouter()

schedule_router.register('', ScheduleModelViewSet)

