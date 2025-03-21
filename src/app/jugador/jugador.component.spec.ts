import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JugadorComponent } from './jugador.component';

describe('JugadorComponent', () => {
  let component: JugadorComponent;
  let fixture: ComponentFixture<JugadorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [JugadorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
