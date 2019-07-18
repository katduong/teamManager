import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  gameNum: any;
  players: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
      this.gameNum = this._httpService.gameNum;
      console.log(this.gameNum);
  }
}
