import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {RecipeService} from '../../services/recipeService';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: RecipeModel) => {
      this.selectedRecipe = recipe;
    });
  }

}
