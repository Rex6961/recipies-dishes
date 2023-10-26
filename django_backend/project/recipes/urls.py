from django.urls import path

from recipes.views import (CategoriesAPIView,
                   CategoryAPIView,
                   RecipesAPIView,
                   CategoriesDeleteAPIView,
                   CategoryDeleteAPIView,
                   RecipesDeleteAPIView)


urlpatterns = [
    path('', CategoriesAPIView.as_view()),
    path('<int:pk>/', CategoriesDeleteAPIView.as_view()),
    path('category/', CategoryAPIView.as_view()),
    path('category/<int:pk>/', CategoryDeleteAPIView.as_view()),
    path('recipes/', RecipesAPIView.as_view()),
    path('recipes/<int:pk>/', RecipesDeleteAPIView.as_view()),
]
