import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PautaListaComponent } from './pauta-lista.component';

describe('PautaListaComponent', () => {
  let component: PautaListaComponent;
  let fixture: ComponentFixture<PautaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PautaListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PautaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
