import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromiseFormComponent } from './compromise-form.component';

describe('CompromiseFormComponent', () => {
  let component: CompromiseFormComponent;
  let fixture: ComponentFixture<CompromiseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromiseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
