import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresMenuComponent } from './genres-menu.component';

describe('GenresMenuComponent', () => {
  let component: GenresMenuComponent;
  let fixture: ComponentFixture<GenresMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
