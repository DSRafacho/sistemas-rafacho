from django.db import models
from django.contrib.auth.models import AbstractUser


class UserClientModel(AbstractUser):
    UFs = (
        ("AC", "Acre"),
        ("AL", "Alagoas"),
        ("AP", "Amapá"),
        ("AM", "Amazonas"),
        ("BA", "Bahia"),
        ("CE", "Ceará"),
        ("DF", "Distrito Federal"),
        ("ES", "Espírito Santo"),
        ("EX", "Exterior"),
        ("GO", "Goiás"),
        ("MA", "Maranhão"),
        ("MT", "Mato Grosso"),
        ("MS", "Mato Grosso do Sul"),
        ("MG", "Minas Gerais"),
        ("PA", "Pará"),
        ("PB", "Paraíba"),
        ("PR", "Paraná"),
        ("PE", "Pernambuco"),
        ("PI", "Piauí"),
        ("RJ", "Rio de Janeiro"),
        ("RN", "Rio Grande do Norte"),
        ("RS", "Rio Grande do Sul"),
        ("RO", "Rondônia"),
        ("RR", "Roraima"),
        ("SC", "Santa Catarina"),
        ("SP", "São Paulo"),
        ("SE", "Sergipe"),
        ("TO", "Tocantins"),
    )
    email = models.EmailField(
        verbose_name='Email',
        help_text='Endereço de email',
        null=False,
        blank=False,
        unique=True,
    )

    # Person info
    cpf = models.IntegerField(
        verbose_name='CPF',
        help_text='Código CPF',
        null=False,
        blank=False,
    )
    birth_date = models.DateField(
        verbose_name='Data de nascimento',
        auto_now_add=True,
        help_text='Data de nascimento do usuário',
    )
    # age = models.IntegerField(
    #     verbose_name='Idade',
    #     help_text='Idade do usuário',
    #     null=False,
    #     blank=False,
    # )

    # Adress Info
    cep = models.IntegerField(
        verbose_name='Código CEP',
        help_text='Código CEP',
        null=False,
        blank=False,
    )
    street = models.CharField(
        max_length=50,
        verbose_name='Rua',
        help_text='Nome da rua',
        null=False,
        blank=False,
    )
    neighboorhood = models.CharField(
        max_length=25,
        verbose_name='Bairro',
        help_text='Nome do bairro',
        null=False,
        blank=False,
    )
    city = models.CharField(
        max_length=27,
        verbose_name='Cidade',
        help_text='Nome da cidade',
        null=False,
        blank=False,
    )
    uf = models.CharField(
        max_length=2,
        choices=UFs,
        verbose_name='Estado',
        help_text='Nome do estado',
        null=False,
        blank=False,
    )
    number = models.IntegerField(
        verbose_name='Número',
        help_text='Número da residência',
        null=False,
        blank=False,
    )
    complement = models.IntegerField(
        verbose_name='Complemento',
        help_text='Complemento',
        null=False,
        blank=False,
    )

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        # "email",
        "cep",
        "street",
        "neighboorhood",
        "city",
        "uf",
        "number",
        "complement",
    ]
