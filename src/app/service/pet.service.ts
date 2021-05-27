import { Injectable } from '@angular/core';
import { PETLIST } from '../modules/pet-data';




@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }


  getPets() {
    console.log(Promise.resolve(PETLIST))
    return Promise.resolve(PETLIST)
}
}
