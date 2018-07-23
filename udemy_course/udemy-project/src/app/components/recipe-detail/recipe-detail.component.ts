import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../../services/recipeService";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

}
