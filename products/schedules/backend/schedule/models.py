from django.db import models
from core.models import BaseModel


class ScheduleModel(BaseModel):
    SERVICE_TYPES = (
        ('1', 'Serviço 1'),
        ('2', 'Serviço 2'),
        ('3', 'Serviço 3'),
        ('4', 'Serviço 4'),
        ('5', 'Serviço 5'),
    )

    time = models.TimeField(
        verbose_name='Horário',
        help_text='Hora marcada pelo usuário para o serviço',
    )
    date = models.DateField(
        verbose_name='Data',
        help_text='Data marcada pelo usuário para o serviço',
    )
    service = models.CharField(
        max_length=5,
        choices=SERVICE_TYPES,
        verbose_name='Tipo do serviço',
        help_text='O serviço que será oferecido ao usuário',
    )
