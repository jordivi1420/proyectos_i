from dataclasses import field
from statistics import mode

from rest_framework import serializers
from apps.productos.models import Productos

class ProductoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Productos
        fields = "__all__"