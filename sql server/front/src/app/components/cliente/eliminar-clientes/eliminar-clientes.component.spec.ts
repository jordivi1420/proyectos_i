import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarClientesComponent } from './eliminar-clientes.component';

describe('EliminarClientesComponent', () => {
  let component: EliminarClientesComponent;
  let fixture: ComponentFixture<EliminarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarClientesComponent]
    });
    fixture = TestBed.createComponent(EliminarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
