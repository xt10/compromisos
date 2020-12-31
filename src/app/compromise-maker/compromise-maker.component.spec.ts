import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromiseMakerComponent } from './compromise-maker.component';

describe('CompromiseMakerComponent', () => {
  let component: CompromiseMakerComponent;
  let fixture: ComponentFixture<CompromiseMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromiseMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromiseMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
