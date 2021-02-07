import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is description test',
      'https://images-gmi-pmc.edge-generalmills.com/b57ee35f-bce2-4229-8bf5-19b97876a4cb.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is description test',
      'https://images-gmi-pmc.edge-generalmills.com/b57ee35f-bce2-4229-8bf5-19b97876a4cb.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
