import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from "../../../models/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amounteInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    this.ingredientAdded.emit(new IngredientModel(
      this.nameInputRef.nativeElement.value,
      this.amounteInputRef.nativeElement.value
    ));
  }
}
