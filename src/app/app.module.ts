import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutcareerComponent } from './aboutcareer/aboutcareer.component';
import { TechstackComponent } from './techstack/techstack.component';
import { SampleappsComponent } from './sampleapps/sampleapps.component';
import { ReferencesComponent } from './references/references.component';
import { HttpClientModule } from '@angular/common/http';

//import forms from angular
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutcareerComponent,
    TechstackComponent,
    SampleappsComponent,
    ReferencesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
