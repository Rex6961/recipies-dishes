from django.shortcuts import render
from rest_framework import generics

from recipes.models import (Categories,
                    Category,
                    Recipes)
from recipes.serializers import (CategoriesSerializer,
                         CategorySerializer,
                         RecipesSerializer)

# Create your views here.
class CategoriesAPIView(generics.ListCreateAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


class CategoryAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipesAPIView(generics.ListCreateAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer


class CategoriesDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer


class CategoryDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipesDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer
