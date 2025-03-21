import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreguntasComponent } from './preguntas.component';

describe('PreguntasComponent', () => {
  let component: PreguntasComponent;
  let fixture: ComponentFixture<PreguntasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PreguntasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
