import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
const MATERIAL_MODULES =[

  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  FlexLayoutModule,
  MatToolbarModule,

   
]


@NgModule({
  
  imports :MATERIAL_MODULES,
  exports:MATERIAL_MODULES
   
  
})
export class MaterialModule { }
