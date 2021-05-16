import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetaComponent } from './planeta/planeta.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

const routes: Routes = [{path: 'planeta', component: PlanetaComponent}, 
                        {path: 'tecnologia', component: TecnologiaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
