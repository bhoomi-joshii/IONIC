import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: '201606100110113',
      ingredints: ['45', '48', '50'],
    },
    {
      id: 'r2',
      title: '201606100110115',
      ingredints: ['70', '72', '50'],
    },
    {
      id: 'r3',
      title: '201606100110107',
      ingredints: ['78', '28', '78'],
    },
    {
      id: 'r4',
      title: '201606100110102',
      ingredints: ['96', '86', '78'],
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
