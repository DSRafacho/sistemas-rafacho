from django.utils import timezone
from django.db import models
import uuid


class BaseModel(models.Model):
    """ Modelo com setup basico de controle e suporte para ser usado em quase todos os modelos """

    name = models.CharField("Nome", max_length=50, blank=False, null=False, unique=True)
    description = models.TextField("Descrição", blank=False, null=False)

    uuid = models.UUIDField(
        verbose_name='UUID',
        default=uuid.uuid4,
        unique=True,
        help_text='UUID Código único não sequencial'
    )
    created_date = models.DateField(
        verbose_name='Data de criação',
        auto_now_add=True,
        help_text='Data da criação do registro',
    )
    created_time = models.TimeField(
        verbose_name='Hora de criação',
        auto_now_add=True,
        help_text='Hora da criação do registro',
    )
    active = models.BooleanField(
        verbose_name='Ativo',
        default=True,
        help_text='Se o registro está ativo ou não'
    )
    # status = models.BooleanField(verbose_name='Status', default=True, help_text='Se o registro está ativo ou não',)

    class Meta:
        abstract = True
