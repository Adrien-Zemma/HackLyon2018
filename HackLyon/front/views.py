from django.shortcuts import render
from django.http import HttpResponse, HttpResponseServerError
from django.views import View

from .models import User

# Create your views here.

class Profile(View):
	def get(self, request, *args, **kwargs):
        	return render(request, 'index.html', None)
	
	def post(self, request, *args, **kwargs):
		new = User()
		try:
			new.name = request.POST.get("name")
			new.firstname = request.POST.get("surname")
			new.age = request.POST.get("age")
			new.email = request.POST.get("mail")
			new.subscriptions = request.POST.get("abonnement")
		except ValueError:
        		return HttpResponseServerError()
		new.save()