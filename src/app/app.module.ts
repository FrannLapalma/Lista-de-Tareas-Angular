import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from'@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { ListadetareasComponent } from './componentes/listadetareas/listadetareas.component';
import { CardTareaComponent } from './componentes/card-tarea/card-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BotonComponent,
    ListadetareasComponent,
    CardTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
