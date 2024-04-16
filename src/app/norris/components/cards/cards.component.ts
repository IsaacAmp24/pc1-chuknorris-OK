import {Component, OnInit} from '@angular/core';
import {NorrisApiService} from "../../services/norris-api.service";
import { MatCardModule} from "@angular/material/card";  // se coloca el import para el modulo de cards en html
import {MatGridList, MatGridTile} from "@angular/material/grid-list"; // se coloca el import para el modulo de grid en html
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridList,
    MatGridTile,
    NgForOf
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  title = 'Norris Jokes';

  public categories: string [] = [];
  public cardContent: any [] = [];

  constructor(private service: NorrisApiService) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.service.getAllCategories().subscribe((data) => {
      this.categories = data;
      this.getJokePerCategory();
    });
  }

  getJokePerCategory() {
    for (let i = 0; i < this.categories.length; i++) {
      this.service.getJokePerCategory(this.categories[i]).subscribe((data) => {
        const jokeInfo = {
          jokeId: data.id,
          value: data.value,
          category: data.categories[0]
        };
        this.cardContent.push(jokeInfo);
      });
    }

  }


}
