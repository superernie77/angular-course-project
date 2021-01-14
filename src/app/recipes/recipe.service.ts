import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Force Pizza',
            'extra force added',
            'https://media.giphy.com/media/9B5EkgWrF4Rri/giphy.gif',
            [
                new Ingredient('Tomatoes', 3),
                new Ingredient('Flour', 200),
                new Ingredient('Force', 1)
            ]),
        new Recipe(
            'Cowboy Pizza',
            'with good milage on it',
            'https://media.giphy.com/media/10kxE34bJPaUO4/giphy.gif',
            [new Ingredient('Tomatoes', 3),
            new Ingredient('Cattle', 2),])
    ];

    constructor(private slService : ShoppingListService){}

    getRecipes() {
        // copy of the array returned
        return this.recipes.slice();
    }

    getRecipeById(id: number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}