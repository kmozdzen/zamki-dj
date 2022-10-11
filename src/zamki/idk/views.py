from http.client import HTTPResponse
import imp
from multiprocessing import context
from urllib.request import HTTPErrorProcessor
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

tuple_of_castles = ("zamek", "bastion", "forteca", "inferno", "nekropolia", "lochy", "twierdza", "cytadela", "wrotazywiolow", "przystan")

def home(request):
    return render(request, 'home.html')

def testing(request, castle):
    current_castle = castle.lower()

    if castle not in tuple_of_castles:
        return HttpResponse("Brak wynikow")
    
    #The part of program where we send castle name to python script which take names and pictures from external site
    from . import fromsite
    fromsite.from_url(current_castle)
    
    id = []
    for i in range(len(fromsite.names)):
        id.append(i)
        
    names_images_id = zip(fromsite.names, fromsite.images, id)
    #
    
    #update context
    context = {'names_images_id' : names_images_id, 'castle' : current_castle, "heroes_amount" : len(id)}

    #clear tables, bcs we dont need more previous heroes 
    fromsite.names = []
    fromsite.images = []

    return render(request, 'testing.html', context)