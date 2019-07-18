import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
    newPlayer: any;
    error: any;
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.newPlayer = {name: "", position: ""};
    }
    createPlayer() {
        let observable = this._httpService.createPlayer(this.newPlayer);
        observable.subscribe(data => {
            console.log(data);
            if (data['error']) {
                this.error = data['error'];
            }
            else {
                this._router.navigate(['/players/list']);
            }
        });
    }
}
