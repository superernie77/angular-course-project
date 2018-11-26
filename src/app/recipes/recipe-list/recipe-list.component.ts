import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Force Pizza','extra force added','https://media.giphy.com/media/9B5EkgWrF4Rri/giphy.gif'),
    new Recipe('Cowboy Pizza','with good milage on it','https://media.giphy.com/media/10kxE34bJPaUO4/giphy.gif')
  ];

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
