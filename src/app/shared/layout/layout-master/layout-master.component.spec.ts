import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMasterComponent } from './layout-master.component';

describe('LayoutMasterComponent', () => {
  let component: LayoutMasterComponent;
  let fixture: ComponentFixture<LayoutMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
