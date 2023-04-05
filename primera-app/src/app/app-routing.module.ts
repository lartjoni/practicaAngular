import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: 'porfolio', component:PorfolioComponent},
  {path: 'edicion', component:EdicionComponent},
  {path: '', redirectTo:'/porfolio', pathMatch:'full'},
  {path: '**', component:Pagina404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
