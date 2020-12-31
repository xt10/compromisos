import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConsultantComponent } from './table-consultant.component';

describe('TableConsultantComponent', () => {
  let component: TableConsultantComponent;
  let fixture: ComponentFixture<TableConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
