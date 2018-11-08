import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza','Yummy Pizza','https://image.shutterstock.com/z/stock-photo-fresh-pizza-with-tomatoes-cheese-and-mushrooms-on-wooden-table-closeup-528695131.jpg'),
    new Recipe('Pizza','Yummy Pizza','https://image.shutterstock.com/z/stock-photo-fresh-pizza-with-tomatoes-cheese-and-mushrooms-on-wooden-table-closeup-528695131.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
