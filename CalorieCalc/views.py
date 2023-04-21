from django.shortcuts import render

# Create your views here.


def homePage(call):
    return render(call, 'homePage.html')
