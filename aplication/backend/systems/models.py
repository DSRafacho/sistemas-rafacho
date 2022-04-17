from django.db import models
from core.models import BaseModel


class System(BaseModel):
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'System'

    PLATAFORMS = (
        ('W', 'Web'),
        ('M', 'Mobile'),
        ('D', 'Desktop'),

        ('WM', 'Web e Mobile'),
        ('WD', 'Web e Desktop'),
        ('MD', 'Mobile e Desktop'),
        ('MWD', 'Web e Mobile e Desktop'),
    )

    avaliable_plataforms = models.CharField(max_length=3, choices=PLATAFORMS, null=False, blank=False, default='W')
