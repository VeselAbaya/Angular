import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from "../../models/ingredient.model";
import {ShoppingListService} from "../../services/shoppingListService";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amounteInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    this.shoppingListService.add(new IngredientModel(
      this.nameInputRef.nativeElement.value,
      this.amounteInputRef.nativeElement.value
    ));
  }
}
