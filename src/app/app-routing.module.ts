import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetdetailComponent } from './component/petdetail/petdetail.component';
import { PetsComponent } from './component/pets/pets.component';

const routes: Routes = [{path:'',component:PetsComponent},
{path:'petdetail',component:PetdetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
