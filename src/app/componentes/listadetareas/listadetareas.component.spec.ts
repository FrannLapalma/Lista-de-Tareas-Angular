import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadetareasComponent } from './listadetareas.component';

describe('ListadetareasComponent', () => {
  let component: ListadetareasComponent;
  let fixture: ComponentFixture<ListadetareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadetareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadetareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
