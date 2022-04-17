from rest_framework import serializers
from schedule.models import ScheduleModel


class ScheduleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleModel
        fields = '__all__'
