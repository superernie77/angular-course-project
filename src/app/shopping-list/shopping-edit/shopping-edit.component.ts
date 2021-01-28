import { Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription : Subscription;

  editMode = false;

  editedItemIndex : number;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (i : number) => {
        this.editMode = true;
        this.editedItemIndex = i;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount );
    this.slService.addIngredient(newIngredient);
  }

}
