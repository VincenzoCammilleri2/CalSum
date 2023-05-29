from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('home', views.homePage, name="homePage"),
    path('learn', views.learnMore, name="learnMore"),
    path('login', views.loginPage, name="loginPage"),
    path('calculatorPage', views.calculatorPage, name="calculatorPage"),
    path('contactPage', views.contactPage, name="contactPage")

]
