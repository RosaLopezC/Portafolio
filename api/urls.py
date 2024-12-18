from django.urls import path
from .views import PortfolioData

urlpatterns = [
    path('portfolio-data/', PortfolioData.as_view(), name="portfolio-data"),
]
