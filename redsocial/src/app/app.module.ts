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
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListService } from './item-list/item-list.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    PiePaginaComponent,
    ItemListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
