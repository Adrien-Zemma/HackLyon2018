from django.db import models
from django import forms

# Create your models here.

SUBS_CHOICES = (
	('B', 'BlablaCar'),
	('S', 'SNCF'),
	('T', 'TCL')
)

SEXE_CHOICES = (
	('Mr', 'Monsieur'),
	('Mme', 'Madame'),
)
class Subscriptions(models.Model):
	name = models.CharField(max_length=1, choices=SUBS_CHOICES, null=False, blank=True, unique=True)

	def __str__(self):
		return dict(SUBS_CHOICES).get(self.name)

class User(models.Model):
	MOVE_CHOICES = (
		('T', 'transit'),
		('D', 'driving'),
		('B', 'bicycling'),
	)
	name = models.CharField(max_length=30)
	firstname = models.CharField(max_length=30)
	age = models.IntegerField()
	email = models.EmailField()
	sexe = models.CharField(max_length=3, choices=SEXE_CHOICES)
	prefer_transport = models.CharField(max_length=2, choices=MOVE_CHOICES)
	subscriptions = models.ManyToManyField("Subscriptions")

	def __str__(self):
		return self.firstname + " " + self.name


class ProfileForm(forms.ModelForm):
	
	class Meta:
		 model = User
		 fields = '__all__'
		 exclude = ('sexe', 'subscriptions', 'prefer_transport')
		#  widgets = {
		# 	'sexe': forms.Select(choices=SEXE_CHOICES)
		# 	"subscriptions": forms.MultipleChoiceField(queryset=User.objects.all())
		# }

class InputForm(forms.Form):
	src = forms.CharField(max_length=500, label='Adresse de départ')
	dest = forms.CharField(max_length=500, label='Adresse d\'arriver')
	mode = forms.ModelMultipleChoiceField(queryset=Subscriptions.objects.all())