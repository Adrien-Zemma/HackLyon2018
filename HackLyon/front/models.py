from django.db import models

# Create your models here.

SUBS_CHOICES = (
	('B', 'BlablaCar'),
	('S', 'SNCF'),
	('T', 'TCL')
)

class Subscriptions(models.Model):
	name = models.CharField(max_length=1, choices=SUBS_CHOICES, null=False, blank=True, unique=True)

	def __str__(self):
		return dict(SUBS_CHOICES).get(self.name)

class User(models.Model):
	SEXE_CHOICES = (
    		('Mr', 'Monsieur'),
    		('Mme', 'Madame'),
	)
	MOVE_CHOICES = (
		('B', 'Bus'),
		('T', 'Tram'),
		('Vo', 'Voiture'),
		('Ve', 'Vélo'),
	)
	name = models.CharField(max_length=30)
	firstname = models.CharField(max_length=30)
	age = models.IntegerField()
	email = models.EmailField()
	sexe = models.CharField(max_length=1, choices=SEXE_CHOICES)
	prefer_transport = models.CharField(max_length=2, choices=MOVE_CHOICES)
	subscriptions = models.ManyToManyField("Subscriptions")