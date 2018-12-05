import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Force Pizza','extra force added','https://media.giphy.com/media/9B5EkgWrF4Rri/giphy.gif'),
        new Recipe('Cowboy Pizza','with good milage on it','https://media.giphy.com/media/10kxE34bJPaUO4/giphy.gif')
      ];

      getRecipes(){
          // copy of the array returned
          return this.recipes.slice();
      }
}