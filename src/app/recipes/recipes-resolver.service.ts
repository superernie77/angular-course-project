import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage-service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn : 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService : DataStorageService, private recipeService : RecipeService){}

  resolve(route: ActivatedRouteSnapshot, state : RouterStateSnapshot){
    console.log("Resolver called.");
    const recipes = this.recipeService.getRecipes();
    // only fetch data on init when there is no data fetched yet.
    // this happens only when the app is started
    if (recipes.length === 0){
      return this.dataStorageService.fecthRecipes();
    } else {
      return recipes;
    }

  }

}
