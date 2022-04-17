from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    Classe de usuário padrão que visa atender todos os possíveis casos
    de necessidade de dados
    """

    # My fields
    cpf = models.IntegerField(blank=True, null=True)
    age = models.IntegerField(default=0)
    cep = models.IntegerField(default=0)
    district = models.CharField(max_length=30)
    street = models.CharField(max_length=20)
    number = models.IntegerField(default=0)
    complement = models.CharField(max_length=120)

    # Overwrite of django fields
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=15)
    email = models.EmailField(max_length=254, unique=True, error_messages={'unique': "O email cadastrado já existe."})
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'  # USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ["username", "password"]
