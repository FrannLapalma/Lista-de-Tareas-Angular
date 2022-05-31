import { Component, OnInit } from '@angular/core';
import { TareaserviceService } from 'src/app/servicios/tareaservice.service';
import { TareaInterface } from 'src/app/TareaInterface';

@Component({
  selector: 'app-listadetareas',
  templateUrl: './listadetareas.component.html',
  styleUrls: ['./listadetareas.component.css']
})
export class ListadetareasComponent implements OnInit {
  tareas: TareaInterface[] = [];
  
  constructor ( 
    private TareaserviceService: TareaserviceService
    ) { }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas():void {
    this.TareaserviceService.getTareas()
    .subscribe(tareas =>this.tareas = tareas);
  }

}
