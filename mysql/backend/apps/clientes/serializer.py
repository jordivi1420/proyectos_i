
from dataclasses import field
from statistics import mode

from rest_framework import serializers
from apps.clientes.models import Cliente

class ClientesSerializer(serializers.ModelSerializer):
    # len_nombreCliente = serializers.SerializerMethodField()
    class Meta:
        model = Cliente
        fields = "__all__"