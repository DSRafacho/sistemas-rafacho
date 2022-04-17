from rest_framework.viewsets import ModelViewSet

from schedule.models import ScheduleModel
from schedule.serializers import ScheduleModelSerializer


class ScheduleModelViewSet(ModelViewSet):
    queryset = ScheduleModel.objects.all()
    serializer_class = ScheduleModelSerializer
