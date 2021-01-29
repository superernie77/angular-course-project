import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm : NgForm;

  subscription : Subscription;

  editMode = false;

  editedItemIndex : number;

  editedItem : Ingredient;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (i : number) => {
        this.editMode = true;
        this.editedItemIndex = i;
        this.editedItem = this.slService.getIngredients()[i];
        this.slForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount );
    if(this.editMode) {
      this.slService.updateIngedient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slForm.reset();
    this.editMode = false;
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
}
