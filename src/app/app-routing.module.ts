import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent} from './inicial/inicial.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import {FooterComponent } from './footer/footer.component'
import { FeedComponent } from './feed/feed.component';
import { PostagemComponent } from './postagem/postagem.component';
import { CommentsComponent } from './comments/comments.component';
 



const routes: Routes = [

  { path:'' , redirectTo: 'inicial', pathMatch:'full'}, 
  { path:'inicial', component: InicialComponent},
  {path: 'login', component: LoginComponent},
  {path:'cadastrar', component: CadastrarComponent}, 
{path:'footer', component: FooterComponent}, 
{path: 'feed', component: FeedComponent},
{path: 'postagem', component: PostagemComponent}, 
{path: 'comments', component: CommentsComponent}


]




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
