import { Component, OnInit, Input } from '@angular/core';
import { TareaInterface } from 'src/app/TareaInterface';
import { LISTADETAREAS } from 'src/app/mock-tareas';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.css']
})
export class CardTareaComponent implements OnInit {
  @Input () tarea:TareaInterface = LISTADETAREAS [0]
  faTimes = faTimes; 
  constructor() { }

  ngOnInit(): void {
  }

}
