import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUtilComponent } from './product-util.component';

describe('ProductUtilComponent', () => {
  let component: ProductUtilComponent;
  let fixture: ComponentFixture<ProductUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
