from django.db import models
import uuid


class BaseModel(models.Model):
    """
    Modelo padrão do sistema, herdado em quase todas as tabelas.
    """
    class Meta:
        abstract = True

    uuid = models.UUIDField(
        verbose_name='UUID',
        default=uuid.uuid4,
        unique=True,
        help_text='Código UUID  único não sequencial',
        auto_created=True
    )

    is_active = models.BooleanField(
        verbose_name='Ativo',
        default=True,
        help_text='Se o registro está ativo ou não',
    )

    created_date = models.DateField(
        verbose_name='Data da criação',
        auto_now_add=True,
        help_text='Data da criação do registro',
    )

    created_time = models.TimeField(
        verbose_name='Hora da criação',
        auto_now_add=True,
        help_text='Hora da criação do registro',
    )

    """status = models.BooleanField(
        verbose_name='Ativo',
        default=True,
        help_text='Se o registro está ativo ou não',
    )
    
    user"""
