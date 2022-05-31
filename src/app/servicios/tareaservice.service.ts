import { Injectable } from '@angular/core';
import { LISTADETAREAS } from 'src/app/mock-tareas';
import { TareaInterface } from 'src/app/TareaInterface';
import { Observable, of } from 'rxjs'; 

// import { HttpClient, HttpHandler } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TareaserviceService {
  constructor() { }

  getTareas () : Observable<TareaInterface[]> {
    const tareas = of(LISTADETAREAS);
    return tareas;
  }
}