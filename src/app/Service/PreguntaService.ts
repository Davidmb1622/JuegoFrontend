import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pregunta} from "../Models/Pregunta";


@Injectable({
  providedIn: 'root',
})

export class PreguntaService {
  private apiUrl = 'http://localhost:8081/preguntas';


  constructor(private http: HttpClient) {
  }

  getPregunta(PreguntaId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${PreguntaId}`);
  }
  getTodasPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.apiUrl);
  }


}
