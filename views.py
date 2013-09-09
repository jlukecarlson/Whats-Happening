# Create your views here.
from django.shortcuts import render_to_response
from django.http import HttpResponse
import api_info

def what_home(request):
    return render_to_response('news-site-new.html')
def movies(request):
    return HttpResponse(api_info.rotten_tomatoes_info(), mimetype='json')
def times(request):
    return HttpResponse(api_info.nytimes_info(), mimetype='json')
def tech(request):
    return HttpResponse(api_info.cnet_info(), mimetype='xml')
def music(request):
    return HttpResponse(api_info.itunes_info(), mimetype='json')
