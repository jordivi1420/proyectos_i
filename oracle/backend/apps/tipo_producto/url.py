from django.urls import path
from apps.tipo_producto.views import Tipo_producto_detail, Tipo_producto_list

app_name = "tipo_producto"

urlpatterns=[
path('',Tipo_producto_list.as_view()),
path('<int:pk>', Tipo_producto_detail.as_view()),
]