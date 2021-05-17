import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

const routes: Routes = [{path: 'planeta', component: PlanetaComponent}, 
                        {path: 'tecnologia', component: TecnologiaComponent},
                        {path: '', component: MainPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
