from django.urls import path


from .views import Profile, Index, deco

urlpatterns = [
    path('profile/', Profile.as_view(), name='profile'),
    path('deco/', deco, name='profile'),
    path('', Index.as_view(), name='index')
]