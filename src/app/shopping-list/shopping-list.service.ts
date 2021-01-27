import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('more Apples', 5)
      ];
    

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient : Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice())
      }

      addIngredients(ingredients : Ingredient[]){
        // spread operator converts array into list
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())
      }
}