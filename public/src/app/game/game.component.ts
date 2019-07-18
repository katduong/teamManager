import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  players: any;
  gameNum: any;
  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute
  ) { }
  ngOnInit() {
      this.getPlayers();
      // this.gameNum = this._httpService.gameNum;
      // console.log(this.gameNum);
      this._route.params.subscribe((params: Params) => {
         console.log(params['id']);
         this.gameNum = params['id'];
      });
  }
  getPlayers() {
      let observable = this._httpService.getPlayers();
      observable.subscribe(data => {
         this.players = data;
      });
  }
  getGameStatus(player) {
      // console.log(player['status'+this.gameNum]);
      return player['status'+this.gameNum];
  }
  playing(player, color) {
      let status = "status" + this.gameNum;
      let data = {};
      data[status] = color;
      console.log(status);
      let observable = this._httpService.editPlayer(player._id, data);
      observable.subscribe(data => {
         console.log(data);
         this.getPlayers();
      });
  }
}
