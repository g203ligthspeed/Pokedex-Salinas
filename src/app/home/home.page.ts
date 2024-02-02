// home.page.ts
import { Component } from '@angular/core';
import { PokeapiService } from './../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonId: number | null = null; // Inicializado a null
  pokemonName: string | null = null; // Inicializado a null
  pokemonDetails: any;

  constructor(private api: PokeapiService) {}

  getPokemonDataIDById() {
    try {
      if (this.pokemonId !== null) {
        this.api.getPokemonID(this.pokemonId).subscribe(response => {
          this.pokemonDetails = response;
          console.log(this.pokemonDetails);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  getPokemonDataByName() {
    try {
      if (this.pokemonName !== null) {
        this.api.getPokemonName(this.pokemonName).subscribe(response => {
          this.pokemonDetails = response;
          console.log(this.pokemonDetails);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

