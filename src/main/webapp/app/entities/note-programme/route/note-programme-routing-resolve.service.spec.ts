import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { INoteProgramme, NoteProgramme } from '../note-programme.model';
import { NoteProgrammeService } from '../service/note-programme.service';

import { NoteProgrammeRoutingResolveService } from './note-programme-routing-resolve.service';

describe('NoteProgramme routing resolve service', () => {
  let mockRouter: Router;
  let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
  let routingResolveService: NoteProgrammeRoutingResolveService;
  let service: NoteProgrammeService;
  let resultNoteProgramme: INoteProgramme | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({}),
            },
          },
        },
      ],
    });
    mockRouter = TestBed.inject(Router);
    jest.spyOn(mockRouter, 'navigate').mockImplementation(() => Promise.resolve(true));
    mockActivatedRouteSnapshot = TestBed.inject(ActivatedRoute).snapshot;
    routingResolveService = TestBed.inject(NoteProgrammeRoutingResolveService);
    service = TestBed.inject(NoteProgrammeService);
    resultNoteProgramme = undefined;
  });

  describe('resolve', () => {
    it('should return INoteProgramme returned by find', () => {
      // GIVEN
      service.find = jest.fn(id => of(new HttpResponse({ body: { id } })));
      mockActivatedRouteSnapshot.params = { id: 123 };

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultNoteProgramme = result;
      });

      // THEN
      expect(service.find).toBeCalledWith(123);
      expect(resultNoteProgramme).toEqual({ id: 123 });
    });

    it('should return new INoteProgramme if id is not provided', () => {
      // GIVEN
      service.find = jest.fn();
      mockActivatedRouteSnapshot.params = {};

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultNoteProgramme = result;
      });

      // THEN
      expect(service.find).not.toBeCalled();
      expect(resultNoteProgramme).toEqual(new NoteProgramme());
    });

    it('should route to 404 page if data not found in server', () => {
      // GIVEN
      jest.spyOn(service, 'find').mockReturnValue(of(new HttpResponse({ body: null as unknown as NoteProgramme })));
      mockActivatedRouteSnapshot.params = { id: 123 };

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultNoteProgramme = result;
      });

      // THEN
      expect(service.find).toBeCalledWith(123);
      expect(resultNoteProgramme).toEqual(undefined);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['404']);
    });
  });
});
