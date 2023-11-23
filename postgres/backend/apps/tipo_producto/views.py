from django.shortcuts import render
from django.http import Http404
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from apps.tipo_producto.models import Tipo_producto
from apps.tipo_producto.serializer import TipoProductoSerializer


class Tipo_producto_list(generics.ListCreateAPIView):
    queryset = Tipo_producto.objects.all()
    serializer_class = TipoProductoSerializer
# Create your views here.



class Tipo_producto_detail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete de los clientes por pk
    """
    queryset = Tipo_producto.objects.all()
    serializer_class = TipoProductoSerializer
