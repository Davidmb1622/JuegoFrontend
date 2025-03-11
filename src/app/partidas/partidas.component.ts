import { Component, OnInit } from '@angular/core';
import { PartidaService } from '../Service/PartidaService';
import { Partida } from '../Models/Partida';
import {IonicModule} from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.scss'],
  standalone: true,
  imports: [
    IonicModule, HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule
  ],
  providers: [PartidaService]
})
export class PartidasComponent implements OnInit {
  partidas: Partida[] = [];

  constructor(private partidaService: PartidaService) {}

  ngOnInit(): void {
    this.obtenerPartidas();
  }

  obtenerPartidas(): void {
    this.partidaService.obtenerTodasPartidas().subscribe(data => {
      this.partidas = data;
      console.log("Partidas obtenidas:", this.partidas);
    });
  }
}

