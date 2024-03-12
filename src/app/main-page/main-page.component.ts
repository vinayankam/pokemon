import { Component } from '@angular/core';
import { PokemanService } from '../pokeman.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  currentPage: number = 1;
  pageSize: number = 12; // 3x4 grid

  // Pokémon data
  pokemons: any[] = [];
  isLoading: boolean = false;

  constructor(private router: Router, private pokemonService: PokemanService) { }
  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.isLoading = true;
    this.pokemonService.getPokemonList(this.pokemons.length, 12).pipe(take(1)).subscribe((response: any) => {
      this.pokemons = this.pokemons.concat(response.results);
      this.isLoading = false;
    });
  }

}
