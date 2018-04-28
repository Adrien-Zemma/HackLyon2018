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
		if 'id' in request.session:
			form = ProfileForm(instance=User.objects.get(name=request.session['id']))
		return render(request, 'profile.html', {'form': form, 'is_log': True})

	def post(self, request, *args, **kwargs):
		f = ProfileForm(request.POST)
		if f.is_valid():
			print("Valid post")
			request.session['id'] = f.cleaned_data.get("name")
			User.objects.get_or_create(**f.cleaned_data)
		return redirect("/")
		# except TypeError:
        	# 	return HttpResponseServerError()

class Index(View):
	def get(self, request, *args, **kwargs):
		form = InputForm()
		is_log = True
		if 'id' not in request.session:
			is_log = False
		return render(request, 'input.html', {'form': form, 'is_log': is_log})

	def post(self, request, *args, **kwargs):
		f = InputForm(request.POST)
		if f.is_valid():
			t = getPath({
				'user': User.objects.get(name=request.session['id']),
				'input': {
					'src': f.cleaned_data['src'],
					'dest': f.cleaned_data['dest'],
					'mode': 'transit'
				}
			})
		return render(request, 'index.html', {'traj': t['path']})

def deco(request):
	if 'id' in request.session:
		del request.session['id']
	return redirect("/")