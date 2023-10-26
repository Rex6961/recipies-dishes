from django.db import models

# Create your models here.
class Categories(models.Model):
    titleOfCategories = models.CharField(max_length=32)


class Category(models.Model):
    titleOfCategory = models.CharField(max_length=64)
    categories = models.ForeignKey(Categories,
                                   related_name='category',
                                   on_delete=models.CASCADE)


class Recipes(models.Model):
    titleOfRecipe = models.CharField(max_length=128)
    image = models.ImageField(upload_to='images/')
    ingredients = models.TextField()
    processToCook = models.TextField()
    category = models.ForeignKey(Category,
                                 related_name='recipes',
                                 on_delete=models.CASCADE)
