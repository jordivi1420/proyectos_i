from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=15)
    correo = models.EmailField(unique=True)
    password = models.CharField(max_length=100)  # En un escenario real, se debería usar una solución segura para guardar contraseñas

    def __str__(self):
        return self.nombre



# Create your models here.
