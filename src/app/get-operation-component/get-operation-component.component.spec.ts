import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOperationComponentComponent } from './get-operation-component.component';

describe('GetOperationComponentComponent', () => {
  let component: GetOperationComponentComponent;
  let fixture: ComponentFixture<GetOperationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOperationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOperationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
