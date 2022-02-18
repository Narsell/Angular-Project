import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test recipe", "https://guides.gamepressure.com/minecraft/gfx/word/557132265.jpg"), 
    new Recipe("A Test Recipe 2", "This is simply a test recipe 2", "https://guides.gamepressure.com/minecraft/gfx/word/557132265.jpg"), 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
