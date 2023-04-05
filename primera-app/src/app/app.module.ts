import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PrimeroComponent } from './card/primero/primero.component';
import { SegundoComponent } from './card/segundo/segundo.component';
import { TerceroComponent } from './card/tercero/tercero.component';
import { CuartoComponent } from './card/cuarto/cuarto.component';
import { QuintoComponent } from './card/quinto/quinto.component';
import { FooterComponent } from './footer/footer.component';
import { ModalsComponent } from './modals/modals.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { EdicionComponent } from './edicion/edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    QuintoComponent,
    FooterComponent,
    ModalsComponent,
    Pagina404Component,
    PorfolioComponent,
    EdicionComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
