import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent} from './inicial/inicial.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import {FooterComponent } from './footer/footer.component'
 



const routes: Routes = [

  { path:'' , redirectTo: 'inicial', pathMatch:'full'}, 
  { path:'inicial', component: InicialComponent},
  {path: 'login', component: LoginComponent},
  {path:'cadastrar', component: CadastrarComponent}, 
{path:'footer', component: FooterComponent}



]




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
