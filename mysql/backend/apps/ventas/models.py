from django.db import models
# Create your models here.
from django.db import models
from django.utils.timezone import now
from apps.clientes.models import Cliente
class Venta(models.Model):
    fecha = models.DateField(default=now, verbose_name="Fecha Actual")
    descuento = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Descuento")
    total = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Total")
    subtotal = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Sub Total")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de Edicion")
    cliente = models.ForeignKey(Cliente,
                                    null=True,
                                    blank=True,
                                    on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nombre

