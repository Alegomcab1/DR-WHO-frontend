import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividuoFormComponent } from './individuo-form/individuo-form.component';
import { IndividuoComponent } from './individuo/individuo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlanetaFormComponent } from './planeta-form/planeta-form.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { SelectEspecieComponent } from './select-especie/select-especie.component';
import { ShowIndividuoComponent } from './show-individuo/show-individuo.component';
import { TecnologiaFormComponent } from './tecnologia-form/tecnologia-form.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

const routes: Routes = [{path: 'planeta', component: PlanetaComponent}, 
                        {path: 'tecnologia', component: TecnologiaComponent},
                        {path: 'createPlaneta', component: PlanetaFormComponent},
                        {path: 'createPlaneta/:id', component: PlanetaFormComponent},
                        {path: 'listEspecies', component: SelectEspecieComponent},
                        {path: 'individuo/:especie', component: IndividuoComponent},
                        {path: 'createIndividuo/:especie', component: IndividuoFormComponent},
                        {path: 'createIndividuo/:especie/:id', component: IndividuoFormComponent},
                        {path: 'showIndividuo/:id', component: ShowIndividuoComponent},
                        {path: 'createTecnologia/:id', component: TecnologiaFormComponent},
                        {path: 'createTecnologia', component: TecnologiaFormComponent},
                        {path: '', component: MainPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
