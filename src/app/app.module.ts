import {HttpClientModule}from '@angular/common/http'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { InicialComponent } from './inicial/inicial.component';
import { SwiperModule } from "swiper/angular";
import { FooterComponent } from './footer/footer.component';
import { FeedComponent } from './feed/feed.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PostagemComponent } from './postagem/postagem.component';
import { CommentsComponent } from './comments/comments.component';
import { OrderModule } from 'ngx-order-pipe';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicialComponent,
    FooterComponent,
    FeedComponent,
    CadastrarComponent,
    LoginComponent,
    PostagemComponent,
    CommentsComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
  
  ],
  imports: [
    
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    SwiperModule,
    AppRoutingModule , 
    AppRoutingModule, 
    FormsModule,
    OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
