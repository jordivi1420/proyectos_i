from django.shortcuts import render
from django.http import Http404
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from apps.clientes.models import Cliente
from apps.clientes.serializer import ClientesSerializer

# Create your views here.


class ClienteList(generics.ListCreateAPIView):
    """
    Lista de Clientes
    """

    queryset = Cliente.objects.all()
    serializer_class = ClientesSerializer



class ClienteDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete de los clientes por pk
    """
    queryset = Cliente.objects.all()
    serializer_class = ClientesSerializer
# Create your views here.
