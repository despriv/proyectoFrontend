import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app/app.component';
import { CabeceraComponent } from './app/cabecera/cabecera.component';
import { ModuleWithProviders } from '@angular/core';
import { HistorietasComponent } from './app/historietas/historietas.component';
import { MisCosasComponent } from './app/mis-cosas/mis-cosas.component';
import { MisColegasComponent } from './app/mis-colegas/mis-colegas.component';
import { EventosComponent } from './app/eventos/eventos.component';


const routes:Routes=[
    { path: '', component:HistorietasComponent},
    { path: 'home', component:HistorietasComponent},
    { path: 'cabecera', component:CabeceraComponent},
    { path: 'misCosas', component:MisCosasComponent},
    { path: 'misColegas', component:MisColegasComponent},
    { path: 'eventos', component:EventosComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);