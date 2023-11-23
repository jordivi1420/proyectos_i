from dataclasses import field
from statistics import mode
from rest_framework import serializers
from apps.tipo_producto.models import Tipo_producto

class TipoProductoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_producto
        fields = "__all__"
