import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  gameNum: any = 1;
  constructor(private _http: HttpClient) { }
  getPlayers() {
      return this._http.get('/players');
  }
  getPlayer(id) {
      return this._http.get('/players/'+id)
  }
  createPlayer(player) {
      return this._http.post('/players', player);
  }
  editPlayer(id, data) {
      console.log(data);
      return this._http.put('/players/'+id, data);
  }
  deletePlayer(id) {
      return this._http.delete('/players/'+id);
  }
}
