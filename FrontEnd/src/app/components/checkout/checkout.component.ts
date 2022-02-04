import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokeDataService } from 'src/app/poke-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalCost: any = 0;
  pokemonCost: any = 0;
  mon:any =0;
  pokemonList: any = [];
  message: string = "";

  subscription : Subscription = new Subscription();

  pokemon: any = null;
  constructor(private ps: PokeDataService) { }

  ngOnInit(): void{

    this.subscription = this.ps.currentMessage.subscribe(serviceMessage => this.message = serviceMessage)

    this.pokemon = this.ps.pokemon

    

    this.pokemonList = this.ps.pokemonList

    this.totalCost = this.ps.totalCost;
    
      
        

      
      
  // }
  // }
  // delete(mon: any): void{
  //   for(var i = 0; i < this.pokemonList.length; i++){
  //       console.log(this.pokemonList.findIndex(() => mon.id == this.pokemonList[i].id))
  //       if (this.pokemonList.findIndex(() => mon.id == this.pokemonList[i].id) !== -1){
  //         this.pokemonCost = this.pokemonList[i].id
  //         this.totalCost = this.totalCost - (((this.pokemonCost * .01) * 543));
  //         this.pokemonList.splice(i , 1);
          
  //         break
          
  //         }
        
          

        
        
  //   }
   

    
  // }
  }
}
