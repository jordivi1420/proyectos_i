from django.urls import path
from apps.productos.views import ProductoList,ProductoDetal

app_name = "productos"
urlpatterns = [
    path('',ProductoList.as_view()),
    path('<int:pk>',ProductoDetal.as_view()),
]