import { Injectable } from '@angular/core';
import { TareaInterface } from 'src/app/TareaInterface';
import { LISTADETAREAS } from 'src/app/mock-tareas'

@Injectable({
  providedIn: 'root'
})
export class TareaserviceService {

  constructor() { }

  getTareas () : TareaInterface []{
    return LISTADETAREAS
  }
}
