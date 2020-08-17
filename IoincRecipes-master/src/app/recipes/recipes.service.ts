import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Pizza',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png',
      ingredints: ['tometo', 'cheeze', 'onion'],
    },
    {
      id: 'r2',
      title: 'Sandwhich',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
      ingredints: ['tometo', 'bread', 'onion'],
    },
    {
      id: 'r3',
      title: 'cake',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
      ingredints: ['chocolate', 'milk', 'menda'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  geteRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
