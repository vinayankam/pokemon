import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription, take } from 'rxjs';
import { PokemanService } from '../pokeman.service';


@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.scss']
})
export class EvolutionComponent {
  sub = new Subscription();
  id: any;
  pokemonDetails: any;
  pokemonSpecies: any;
  fromSpecies: any;
  currentSpecies: any;
  toSpecies: any = [];
  isDetails: boolean = true;

  constructor(private route: ActivatedRoute, private pokemonService: PokemanService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getDetails(this.id);
      this.getSpecies(this.id);
    });
  }

  getEvolutionChainByUrl(url: string): void {
    this.pokemonService.getEvolutionChainByUrl(url).pipe(take(1)).subscribe(data => {
      console.log("chain", data);
      if (data) {
        this.getFromSpecies(data.chain.species.name)
        this.getCurrentSpecies(data.chain.evolves_to[0].species.name);
        this.getToSpecies(data.chain.evolves_to[0].evolves_to[0].species.name)
      }
    })
  }

  getEvolutionChain(id: number): void {
    this.pokemonService.getEvolutionChain(id).pipe(take(1)).subscribe(data => {
      this.getCurrentSpecies(data?.chain.species.name)
      if (data.chain.evolves_to.length) {
        this.getToSpecies(data?.chain.evolves_to[0].species.name)
      }
    })
  }

  getDetails(id: number): void {
    this.pokemonService.getPokemonDetails(id).pipe(take(1)).subscribe(data => {
      this.pokemonDetails = data;
      console.log("details",data)
    })
  }

  getSpecies(id: number): void {
    this.pokemonService.getSpecies(id).pipe(take(1)).subscribe(data => {
      this.getEvolutionChainByUrl(data.evolution_chain.url)
    })
  }

  getCurrentSpecies(name: string): void {
    this.pokemonService.getPokemonDetailsByname(name).pipe(take(1)).subscribe(data => {
      this.currentSpecies = data;
      console.log("current species", data)
    })
  }

  getToSpecies(name: string): void {
    this.pokemonService.getPokemonDetailsByname(name).pipe(take(1)).subscribe(data => {
      this.toSpecies = data;
      console.log("to species", data)
    })
  }

  getFromSpecies(name: string): void {
    this.pokemonService.getPokemonDetailsByname(name).pipe(take(1)).subscribe(data => {
      this.fromSpecies = data;
      console.log("from species", data)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
