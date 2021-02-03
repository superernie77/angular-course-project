import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { RecipeService } from '../recipes/recipe.service'
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn : 'root'})
export class DataStorageService {
    constructor(private http : HttpClient, private recipeService : RecipeService) {}

    firebaseUrl = "https://ng-course-recipe-book-9c5f8-default-rtdb.europe-west1.firebasedatabase.app/recipes.json";

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.firebaseUrl, recipes ).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fecthRecipes(){
      // patch empty ingredients array by empty array. otherwise firebase will not have the property initialized
      return this.http.get<Recipe[]>(this.firebaseUrl)
      .pipe(
        map(
         recipes => {
           return recipes.map(recipe => {
             return {...recipe, ingredients : recipe.ingredients ? recipe.ingredients : []};
           })
         }
        ),
        tap(recipes => {
          console.log(recipes);
          this.recipeService.setRecipes(recipes);
        })
      )
    }
}
