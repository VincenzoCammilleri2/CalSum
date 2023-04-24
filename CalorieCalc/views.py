from django.shortcuts import render

# Create your views here.


def homePage(request):
    return render(request, 'homePage.html')


def CalSumLogo(request):
    image_url = '/static/images/logo.png'
    return render(request, 'index.html', {'image_url': image_url})
