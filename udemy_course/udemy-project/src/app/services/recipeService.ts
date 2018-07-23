import {RecipeModel} from "../models/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {IngredientModel} from "../models/ingredient.model";
import {ShoppingListService} from "./shoppingListService";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'A test recipe',
      'This the first description',
      'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      [new IngredientModel('Meat', 1), new IngredientModel('Buns', 2)]
    ),
    new RecipeModel(
      'A test recipe the second',
      'This the second description',
      'https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&h=350',
      [new IngredientModel('Bread', 1), new IngredientModel('Buns', 2), new IngredientModel('Apple', 2)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addArray(ingredients);
  }
}
