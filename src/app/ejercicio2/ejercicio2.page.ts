// ejercicio2.page.ts
import { Component } from '@angular/core';
import { PokeapiService } from './../Services/apiservice.service';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: 'ejercicio2.page.html',
  styleUrls: ['ejercicio2.page.scss'],
})
export class Ejercicio2Page {
  pokemonId: number | null = null;
  pokemonName: string | null = null;
  pokemonDetailsById: any = {};
  pokemonDetailsByName: any = {};
  allPokemonList: any[] = [];

  constructor(private api: PokeapiService) {
    this.getAllPokemonList();
  }

  getAllPokemonList() {
    try {
      this.api.getPokemonID(1).subscribe(response => {
        // Assuming you get a response with a 'results' property containing the list of Pokémon
        this.allPokemonList = response.results;
      });
    } catch (error) {
      console.log(error);
    }
  }

  getPokemonDataByIDAndName(id: number, name: string) {
    this.getPokemonDataIDById(id);
    this.getPokemonDataByName(name);
  }

  getPokemonDataIDById(id?: number) {
    try {
      const pokemonId = id || this.pokemonId;

      if (pokemonId !== null) {
        this.api.getPokemonID(pokemonId).subscribe(response => {
          this.pokemonDetailsById = response;
          console.log(this.pokemonDetailsById);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  getPokemonDataByName(name?: string) {
    try {
      const pokemonName = name || this.pokemonName;

      if (pokemonName !== null) {
        this.api.getPokemonName(pokemonName).subscribe(response => {
          this.pokemonDetailsByName = response;
          console.log(this.pokemonDetailsByName);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}


