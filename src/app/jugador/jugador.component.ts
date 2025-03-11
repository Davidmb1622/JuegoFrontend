import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../Service/JugadorService';
import { Jugador } from '../Models/Jugador';
import {IonicModule} from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss'],
  standalone: true,
  imports: [
    IonicModule, HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule
  ],
  providers: [JugadorService]
})
export class JugadorComponent implements OnInit {
  jugadores: Jugador[] = [];
  nuevoJugador: Jugador = { id: 0, nombre: '' };

  constructor(private jugadorService: JugadorService,private router: Router) {}

  ngOnInit(): void {
    this.obtenerJugadores();
  }

  obtenerJugadores(): void {
    this.jugadorService.obtenerTodosJugadores().subscribe(data => {
      this.jugadores = data;
    });
  }

  agregarJugador(): void {
    if (this.nuevoJugador.nombre.trim()) {
      this.jugadorService.crearJugador(this.nuevoJugador).subscribe(jugadorCreado => {
        localStorage.setItem('jugadorId', jugadorCreado.id.toString()); // Guardar ID en localStorage
        this.jugadores.push(jugadorCreado);
        this.nuevoJugador = { id: 0, nombre: '' };
        this.router.navigate(['/preguntas']);
      });
    }
  }


  Verpartidas() {
    this.router.navigate(['/partidas']);
  }

}
