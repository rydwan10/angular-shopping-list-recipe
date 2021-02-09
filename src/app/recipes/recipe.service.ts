import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'French Onion Omelette',
      'Delicious onion omelette easy to cook',
      'https://www.curiouscuisiniere.com/wp-content/uploads/2013/04/French-Onion-Omelette-4990.2.2-500x450.jpg',
      [
        new Ingredient('Tomato', 3),
        new Ingredient('Onion', 2),
        new Ingredient('Egg', 3),
      ]
    ),
    new Recipe(
      'Beef Burger',
      'Beef burger with some extra fat in it',
      'http://ukcdn.ar-cdn.com/recipes/originals/435ba5fb-9c1a-42b7-bf78-313342cf1294.jpg',
      [
        new Ingredient('Burger Bread', 2),
        new Ingredient('Onion', 2),
        new Ingredient('Burger Beef', 1),
        new Ingredient('Pickles', 2),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
