import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { EvolutionComponent } from './evolution/evolution.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'pokemon-details/:id', component:  EvolutionComponent},
  { path: '**', redirectTo: '' } // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
