import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PautasComponent } from './pages/pautas/pautas.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pautas', component: PautasComponent },
  { path: 'resultado/:id', component: ResultadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
