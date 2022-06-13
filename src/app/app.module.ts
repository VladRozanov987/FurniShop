import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { NewprodComponent } from './newprod/newprod.component';
import { HeroComponent } from './main/hero/hero.component';
import { CouterComponent } from './main/counter/counter.component';
import { WedoComponent } from './main/wedo/wedo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    NewprodComponent,
    HeroComponent,
    CouterComponent,
    WedoComponent,  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
