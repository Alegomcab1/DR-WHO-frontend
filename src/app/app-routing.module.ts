import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividuoComponent } from './individuo/individuo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlanetaFormComponent } from './planeta-form/planeta-form.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

const routes: Routes = [{path: 'planeta', component: PlanetaComponent}, 
                        {path: 'tecnologia', component: TecnologiaComponent},
                        {path: 'createPlaneta', component: PlanetaFormComponent},
                        {path: 'createPlaneta/:id', component: PlanetaFormComponent},
                        {path: 'individuo/:especie', component: IndividuoComponent},
                        {path: '', component: MainPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
