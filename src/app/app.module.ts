import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PastelesComponent } from './components/pasteles/pasteles.component';
import { PeleaComponent } from './components/pelea/pelea.component';

const routes:Routes=[
  {path:'',component:AppComponent},
  {path:'inicio',component:InicioComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'pasteles',component:PastelesComponent},
  {path:'pelea', component:PeleaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ClientesComponent,
    PastelesComponent,
    PeleaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
