import { Component, OnInit } from '@angular/core';
import { pets } from '../../modules/pets';
import { PetService } from 'src/app/service/pet.service';



@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {


  petlist: pets[] = [];
  constructor(private petservice:PetService) { }

getpetsdata()
{
this.petservice.getPets().then(petlist=>{this.petlist=petlist
  console.log(petlist)}
  )
console.log("petlist"+this.petlist);
}


  ngOnInit(): void {

this.getpetsdata();
console.log(this.petlist);

  }

}
