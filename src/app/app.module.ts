import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './components/contador/contador.component';
import { InfoComponent } from './components/navbar/info/info.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    ContadorComponent,
    InfoComponent,
    AccordionComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    //Habilita utilizar o [(ngModules)]
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
