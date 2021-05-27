import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetdetailComponent } from './petdetail.component';

describe('PetdetailComponent', () => {
  let component: PetdetailComponent;
  let fixture: ComponentFixture<PetdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
