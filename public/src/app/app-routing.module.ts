import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { StatusComponent } from './status/status.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { AddPlayerComponent } from './add-player/add-player.component';


const routes: Routes = [
    { path: 'player', component: PlayerComponent, children: [
        { path: 'list', component: PlayerListComponent },
        { path: 'addPlayer', component: AddPlayerComponent }]
    },
    { path: 'status', component: StatusComponent, children: [
        { path: 'game/:id', component: GameComponent }]
    },
    { path: '', pathMatch: 'full', redirectTo: '/player/list' },
    { path: '**', component: PageNotFoundComponent }
  // redirect to /alpha if there is nothing in the urlcopy
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
