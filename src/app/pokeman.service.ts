import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemanService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number = 0, limit: number = 20): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/pokemon/${id}`; 
    return this.http.get(url);
  }

  getPokemonDetailsByname(name: string): Observable<any> {
    const url = `${this.apiUrl}/pokemon/${name}`; 
    return this.http.get(url);
  }

  getSpecies(id: number): Observable<any> {
    const url = `${this.apiUrl}/pokemon-species/${id}`; 
    return this.http.get(url);
  }

  getEvolutionChain(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/evolution-chain/${id}`);
  }

  getEvolutionChainByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
}
