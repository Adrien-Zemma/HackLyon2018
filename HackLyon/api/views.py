from front.models import User, Subscriptions
from rest_framework import viewsets
from .serializers import UserSerializer, SubscriptionsSerializer
from django.http import HttpResponse, HttpResponseServerError


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SubscriptionsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Subscriptions.objects.all()
    serializer_class = SubscriptionsSerializer

def user(request, obj):
    print(request)
    return HttpResponse("hello")