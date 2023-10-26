from rest_framework import serializers

from recipes.models import (Categories,
                    Category,
                    Recipes)

class CategoriesSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(
        many=True)

    class Meta:
        model = Categories
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    recipes = serializers.StringRelatedField(
        many=True)

    class Meta:
        model = Category
        fields = '__all__'


class RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = '__all__'
