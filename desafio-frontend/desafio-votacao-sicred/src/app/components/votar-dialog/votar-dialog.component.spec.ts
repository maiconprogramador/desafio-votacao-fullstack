import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotarDialogComponent } from './votar-dialog.component';

describe('VotarDialogComponent', () => {
  let component: VotarDialogComponent;
  let fixture: ComponentFixture<VotarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotarDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
