import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent} from './inicial/inicial.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';



const routes: Routes = [

  { path:'' , redirectTo: 'inicial', pathMatch:'full'}, 
  { path:'inicial', component: InicialComponent},

  {path:'cadastrar', component: CadastrarComponent}, ]




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
