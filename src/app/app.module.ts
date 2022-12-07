import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicialComponent,
    FooterComponent,
    FeedComponent,
    CadastrarComponent,
    LoginComponent
  ],
  imports: [
    
    BrowserModule,
    FontAwesomeModule,
    SwiperModule,
    AppRoutingModule , 
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
