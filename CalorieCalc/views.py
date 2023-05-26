from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

# Create your views here.


def homePage(request):
    return render(request, 'homePage.html')


def learnMore(request):
    return render(request, 'learnMore.html')

def loginPage(request):
    return render(request, 'loginPage.html')

def calculatorPage(request):
    return render(request,'calculatorPage.html')

