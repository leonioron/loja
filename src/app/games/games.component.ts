import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private games;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames()
    .subscribe(data => {
      console.log(data);
    });

  }

}
