import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
// const toBuy = require('../data/toBuy.json');

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private games;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    // this.gamesService.getGames()
    // .then(data => {
    //   this.games = data;
    //   console.log(this.games);
    // });

    // const game = {
    //   name: 'teste',
    //   console: 'teste'
    // };
    // this.gamesService.saveGame(game).subscribe(data => {
    //   this.gamesService.getGames()
    //     .then(response => {
    //       this.games = response;
    //     });
    // });
  }

}
