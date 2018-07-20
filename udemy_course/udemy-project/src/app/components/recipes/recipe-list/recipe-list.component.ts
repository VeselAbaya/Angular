import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('A test recipe', 'This is a test', 'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'),
    new RecipeModel('A test recipe', 'This is a test', 'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')
  ];

  constructor() { }

  ngOnInit() {

  }

}
