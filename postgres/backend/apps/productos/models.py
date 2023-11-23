from django.db import models
from apps.tipo_producto.models import Tipo_producto
# Create your models here.

class Productos(models.Model):
    nombre = models.CharField(max_length=250)
    categoria = models.ForeignKey(Tipo_producto, on_delete=models.CASCADE)
    imagen = models.CharField(max_length=350)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    precioVenta = models.DecimalField(max_digits=10, decimal_places=2,null=True)
    marca = models.CharField(max_length=150,null=True)
    descuento = models.IntegerField(null=True,blank=True)
    envio = models.CharField(max_length=100,null=True)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

