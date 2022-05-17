import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { TareaInterface } from 'src/app/TareaInterface';
import { LISTADETAREAS } from 'src/app/mock-tareas';

@Injectable({
  providedIn: 'root'
})
export class TareaserviceService {
  private apiUrl = ' http://localhost:5000/tareas'

  constructor(
    private http :HttpClient
  ) { }

  getTareas () : Observable<TareaInterface[]>{
    return this.http.get<TareaInterface[]>(this.apiUrl)
  }
}