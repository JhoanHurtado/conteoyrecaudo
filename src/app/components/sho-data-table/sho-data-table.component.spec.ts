import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoDataTableComponent } from './sho-data-table.component';

describe('ShoDataTableComponent', () => {
  let component: ShoDataTableComponent;
  let fixture: ComponentFixture<ShoDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
