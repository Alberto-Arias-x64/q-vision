import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('apiCall', () => {
    it('should call the API and return data', () => {
      const testData = { name: 'Test' };
      const url = '/test-url';

      service.apiCall<any>(url).subscribe((data) => {
        expect(data).toEqual(testData);
      });

      const req = httpMock.expectOne(`${environment.API_URL}${url}`);
      expect(req.request.method).toBe('GET');
      req.flush(testData);
    });
  });
});
