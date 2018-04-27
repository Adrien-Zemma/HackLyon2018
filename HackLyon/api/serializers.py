from front.models import User, Subscriptions
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'firstname', 'age', 'email', 'sexe', 'prefer_transport', 'subscriptions')

class SubscriptionsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subscriptions
        fields = ('name',)