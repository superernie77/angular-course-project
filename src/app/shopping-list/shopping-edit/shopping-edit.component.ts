import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInpuReference : ElementRef;
  @ViewChild('amountInput') amountInpuReference : ElementRef;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const name = this.nameInpuReference.nativeElement.value;
    const amount = this.amountInpuReference.nativeElement.value;
    const newIngredient = new Ingredient(name, amount );
    this.slService.addIngredient(newIngredient);
  }

}
