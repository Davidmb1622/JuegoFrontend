import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../Service/PreguntaService';
import { Pregunta } from '../Models/Pregunta';
import { PartidaService } from '../Service/PartidaService';  // 🔹 Importa el servicio de partidas
import { IonicModule } from "@ionic/angular";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {JugadorService} from "../Service/JugadorService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
  standalone: true,
  imports: [
    IonicModule, HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule
  ],
  providers: [PreguntaService, PartidaService,JugadorService]
})
export class PreguntasComponent implements OnInit {
  preguntas: Pregunta[] = [];
  respuestaUsuario: { [key: number]: boolean | null } = {};
  puntaje: number = 0;
  mostrarResultado: boolean = false;
  jugadorId: number = 0;
  constructor(
    private preguntaService: PreguntaService,
    private partidaService: PartidaService,
    private router: Router
  ) {}

  ngOnInit() {
    const idGuardado = localStorage.getItem('jugadorId');
    if (idGuardado) {
      this.jugadorId = parseInt(idGuardado, 10);
    } else {
      console.error("No hay jugador ID en localStorage");
    }
    this.obtenerPreguntas();
  }

  obtenerPreguntas() {
    this.preguntaService.getTodasPreguntas().subscribe((data) => {
      this.preguntas = data;
      this.respuestaUsuario = {};
    });
  }

  responder(indice: number, respuesta: boolean) {
    if (this.preguntas[indice]) {
      this.respuestaUsuario[indice] = respuesta;
      if (respuesta === this.preguntas[indice].respuesta) {
        this.puntaje++;
      }

      if (Object.keys(this.respuestaUsuario).length === this.preguntas.length) {
        this.finalizarJuego();
      }
    }
  }

  finalizarJuego() {
    this.mostrarResultado = true;

    if (this.jugadorId > 0) {
      this.partidaService.registrarPartida(this.jugadorId).subscribe(
        (data) => {
          console.log("Partida registrada con éxito:", data);
        },
        (error) => {
          console.error("Error al registrar la partida:", error);
        }
      );
    } else {
      console.error("Jugador ID no válido, no se puede registrar la partida.");
    }
  }

  reiniciarJuego() {
    this.puntaje = 0;
    this.mostrarResultado = false;
    this.respuestaUsuario = {};
    this.obtenerPreguntas();
  }

  volveralinicio() {
    this.router.navigate(['/jugador']);
  }
}
