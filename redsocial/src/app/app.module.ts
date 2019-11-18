import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisCosasComponent } from './mis-cosas/mis-cosas.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { routing } from 'src/app.routes';
import { HistorietasComponent } from './historietas/historietas.component';
import { DescriptionComponent } from './historietas/description/description.component';
import { MisColegasComponent } from './mis-colegas/mis-colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import { MisHistorietasComponent } from './historietas/mis-historietas/mis-historietas.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    MisCosasComponent,
    CabeceraComponent,
    HistorietasComponent,
    DescriptionComponent,
    MisColegasComponent,
    EventosComponent,
    MisHistorietasComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
