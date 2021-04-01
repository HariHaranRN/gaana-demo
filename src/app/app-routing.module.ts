import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaanaBodyComponent } from './main/gaana-body/gaana-body.component';
import { SongDetailComponent } from './main/song-detail/song-detail.component';

const routes: Routes = [
  {path: '', component: GaanaBodyComponent},
  {path: 'song-detail', component: SongDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
