import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoDialogComponent } from './sessao-dialog.component';

describe('SessaoDialogComponent', () => {
  let component: SessaoDialogComponent;
  let fixture: ComponentFixture<SessaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessaoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
