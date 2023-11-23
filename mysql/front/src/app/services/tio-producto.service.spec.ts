import { TestBed } from '@angular/core/testing';
import { TioProductoService } from './tio-producto.service';

describe('TioProductoService', () => {
  let service: TioProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TioProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
