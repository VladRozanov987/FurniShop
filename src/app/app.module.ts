import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { NewprodComponent } from './main/newprod/newprod.component';
import { HeroComponent } from './main/hero/hero.component';
import { CouterComponent } from './main/counter/counter.component';
import { WedoComponent } from './main/wedo/wedo.component';
import { SliderComponent } from './main/slider/slider.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    NewprodComponent,
    HeroComponent,
    CouterComponent,
    WedoComponent,
    SliderComponent,],
  imports: [
    BrowserModule,
    SwiperModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
