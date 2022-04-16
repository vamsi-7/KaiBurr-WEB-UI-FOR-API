import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOperationComponentComponent } from './update-operation-component.component';

describe('UpdateOperationComponentComponent', () => {
  let component: UpdateOperationComponentComponent;
  let fixture: ComponentFixture<UpdateOperationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOperationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOperationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
