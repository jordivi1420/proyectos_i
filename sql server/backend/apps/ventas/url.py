from django.urls import path
from .views import VentaList, VentaDetail

app_name = "ventas"
urlpatterns = [
    path('', VentaList.as_view()),
    path('<int:pk>', VentaDetail.as_view()),
]