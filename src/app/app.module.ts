import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlanetaFormComponent } from './planeta-form/planeta-form.component';
import { IndividuoComponent } from './individuo/individuo.component';
import { TecnologiaFormComponent } from './tecnologia-form/tecnologia-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetaComponent,
    TecnologiaComponent,
    PlanetaFormComponent,
    IndividuoComponent,
    MainPageComponent,
    TecnologiaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
