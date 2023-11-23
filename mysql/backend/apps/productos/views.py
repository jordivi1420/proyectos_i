from django.shortcuts import render
from django.http import Http404
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from apps.productos.models import Productos
from apps.productos.serializer import ProductoSerializer

class ProductoList(generics.ListCreateAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductoSerializer


class ProductoDetal(generics.RetrieveUpdateAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductoSerializer
    


# Create your views here.
