import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
      this.getPlayers();
  }
  getPlayers() {
      let observable = this._httpService.getPlayers();
      observable.subscribe(data => {
         this.players = data;
      });
  }
  deletePlayer(player) {
      if( confirm(`Are you sure you want to delete ${player.name}?`)) {
        let observable = this._httpService.deletePlayer(player._id);
        observable.subscribe(data => {
         this.getPlayers();
        });
      }
  }
}
