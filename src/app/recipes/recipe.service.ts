import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.action';

@Injectable()
export class RecipeService {
  recipeChanges = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'French Onion Omelette',
  //     'Delicious onion omelette easy to cook',
  //     'https://www.curiouscuisiniere.com/wp-content/uploads/2013/04/French-Onion-Omelette-4990.2.2-500x450.jpg',
  //     [
  //       new Ingredient('Tomato', 3),
  //       new Ingredient('Onion', 2),
  //       new Ingredient('Egg', 3),
  //     ]
  //   ),
  //   new Recipe(
  //     'Beef Burger',
  //     'Beef burger with some extra fat in it',
  //     'http://ukcdn.ar-cdn.com/recipes/originals/435ba5fb-9c1a-42b7-bf78-313342cf1294.jpg',
  //     [
  //       new Ingredient('Burger Bread', 2),
  //       new Ingredient('Onion', 2),
  //       new Ingredient('Burger Beef', 1),
  //       new Ingredient('Pickles', 2),
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanges.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanges.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }
}
