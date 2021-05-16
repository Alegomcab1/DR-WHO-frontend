import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividuoComponent } from './individuo/individuo.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

const routes: Routes = [{path: 'planeta', component: PlanetaComponent}, 
                        {path: 'tecnologia', component: TecnologiaComponent},
                        {path: 'individuo', component: IndividuoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
