import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PautaDialogComponent } from './pauta-dialog.component';

describe('PautaDialogComponent', () => {
  let component: PautaDialogComponent;
  let fixture: ComponentFixture<PautaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PautaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PautaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
