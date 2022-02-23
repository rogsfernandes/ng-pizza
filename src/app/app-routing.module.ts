import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavsComponent } from 'app/pages/favs/favs.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { MountComponent } from 'app/pages/mount/mount.component';
import { NotFoundComponent } from 'app/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favs', component: FavsComponent },
  { path: 'mount', component: MountComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
