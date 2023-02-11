import { TestBed } from '@angular/core/testing';

import { GenresMenuService } from './genres-menu.service';

describe('GenresMenuService', () => {
  let service: GenresMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenresMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
