import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Tomato', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

}
