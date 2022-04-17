from django.contrib import admin
from django.urls import path, include

from rest_framework.authtoken import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from systems.urls import systems_router
from users.urls import users_router


urlpatterns = [
    # Django
    path('admin/', admin.site.urls),


    # Rest Framework
    # Default Rest Framework route for pass the email and the password to retrive the user token #
    path('api-token-auth/', views.obtain_auth_token),


    # Rest Framework routes for implement JTW #
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),


    # My apps
    path('systems/', include(systems_router.urls)),
    path('users/', include(users_router.urls)),
]
