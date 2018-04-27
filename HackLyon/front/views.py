from django.shortcuts import render
from django.http import HttpResponse, HttpResponseServerError
from django.views import View
from django.views.decorators.csrf import csrf_exempt

from .models import User, Subscriptions

# Create your views here.

class Profile(View):

	@csrf_exempt
	def get(self, request, *args, **kwargs):
        	return render(request, 'index.html', None)
	
	@csrf_exempt
	def post(self, request, *args, **kwargs):
		print(request)
		new = User()
		new.name = request.POST.get("name")
		new.firstname = request.POST.get("surname")
		new.age = request.POST.get("age")
		new.email = request.POST.get("mail")
		new.save()
		new.subscriptions.add(Subscriptions.objects.get(name=k) for k in request.POST.get("abonnement"))
		new.save()
		# except TypeError:
        	# 	return HttpResponseServerError()