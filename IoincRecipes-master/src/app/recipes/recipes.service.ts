import { Recipe } from './recipe.modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Hagimaru',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      ingredints: ['pogo', 'cable', 'power'],
    },
    {
      id: 'r2',
      title: 'Maggi',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      ingredints: ['maggie', 'water', 'maggi masala'],
    },
    {
      id: 'r3',
      title: 'Doremon',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
      ingredints: ['maggie', 'water', 'maggi masala'],
    },
  ];
  constructor() { }

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

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
