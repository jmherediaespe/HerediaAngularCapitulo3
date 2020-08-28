import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://p1.pxfuel.com/preview/288/326/473/leg-of-lamb-tjena-kitchen-vegetables-red-meat.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://p1.pxfuel.com/preview/288/326/473/leg-of-lamb-tjena-kitchen-vegetables-red-meat.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
