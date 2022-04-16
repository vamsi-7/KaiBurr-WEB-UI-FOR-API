import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOperationComponentComponent } from './post-operation-component.component';

describe('PostOperationComponentComponent', () => {
  let component: PostOperationComponentComponent;
  let fixture: ComponentFixture<PostOperationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOperationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOperationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
