from front.models import User, Subscriptions
from rest_framework import viewsets
from .serializers import UserSerializer, SubscriptionsSerializer


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