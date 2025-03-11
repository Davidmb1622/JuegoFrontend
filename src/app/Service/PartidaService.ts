import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Partida } from "../Models/Partida";
import {Jugador} from "../Models/Jugador";

@Injectable({
  providedIn: 'root',
})
export class PartidaService {
  private apiUrl = 'http://localhost:8081/partidas';
  private apiUrl2 = 'http://localhost:8081/jugadores';



  constructor(private http: HttpClient) {}

  obtenerTodasPartidas(): Observable<Partida[]> {
    return this.http.get<Partida[]>(`${this.apiUrl}`);
  }

  registrarPartida(jugadorId: number): Observable<Partida> {
    return this.http.post<Partida>('http://localhost:8081/partidas/registrar', { jugadorId });
  }


  obtenerJugadorPorId(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.apiUrl2}/${id}`);
  }
}
