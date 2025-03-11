import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jugador } from "../Models/Jugador";

@Injectable({
  providedIn: 'root',
})
export class JugadorService {
  private apiUrl = 'http://localhost:8081/jugadores';

  constructor(private http: HttpClient) {}

  obtenerTodosJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.apiUrl}`);
  }

  crearJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(`${this.apiUrl}`, jugador);
  }

  eliminarJugador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
