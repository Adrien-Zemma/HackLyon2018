from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseServerError
from django.views import View
from django.views.decorators.csrf import csrf_exempt

from .models import User, Subscriptions, ProfileForm, InputForm
from .ia import getPath

# Create your views here.

class Profile(View):

	def get(self, request, *args, **kwargs):
		form = ProfileForm()
		return render(request, 'profile.html', {'form': form})

	def post(self, request, *args, **kwargs):
		f = ProfileForm(request.POST)
		if f.is_valid():
			request.session['id'] = request.POST['name']
			f.save()
		return redirect("/")
		# except TypeError:
        	# 	return HttpResponseServerError()

class Index(View):
	def get(self, request, *args, **kwargs):
		form = InputForm()
		return render(request, 'profile.html', {'form': form})

	def post(self, request, *args, **kwargs):
		f = InputForm(request.POST)
		if f.is_valid():
			getPath({
				'user': User.objects.get(name=request.session['id']),
				'input': {
					'src': f.cleaned_data['src'],
					'dest': f.cleaned_data['dest'],
					'mode': 'transit'
				}
			})
