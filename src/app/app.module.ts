import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetsComponent } from './component/pets/pets.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';

import { PetdetailComponent } from './component/petdetail/petdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    NavbarComponent,
    PetdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
