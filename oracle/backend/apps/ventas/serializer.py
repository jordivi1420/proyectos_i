from dataclasses import field
from statistics import mode
from rest_framework import serializers
from .models import Venta

class VentaSerializer(serializers.ModelSerializer):
    # len_nombreCliente = serializers.SerializerMethodField()
    class Meta:
        model = Venta
        fields = "__all__"