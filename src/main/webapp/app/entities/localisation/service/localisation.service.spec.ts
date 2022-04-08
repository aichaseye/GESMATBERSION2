import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NomReg } from 'app/entities/enumerations/nom-reg.model';
import { NomDep } from 'app/entities/enumerations/nom-dep.model';
import { ILocalisation, Localisation } from '../localisation.model';

import { LocalisationService } from './localisation.service';

describe('Localisation Service', () => {
  let service: LocalisationService;
  let httpMock: HttpTestingController;
  let elemDefault: ILocalisation;
  let expectedResult: ILocalisation | ILocalisation[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(LocalisationService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 0,
      region: NomReg.Dakar,
      departement: NomDep.Dakar,
      commune: 'AAAAAAA',
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign({}, elemDefault);

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a Localisation', () => {
      const returnedFromService = Object.assign(
        {
          id: 0,
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new Localisation()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Localisation', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          region: 'BBBBBB',
          departement: 'BBBBBB',
          commune: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Localisation', () => {
      const patchObject = Object.assign({}, new Localisation());

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Localisation', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          region: 'BBBBBB',
          departement: 'BBBBBB',
          commune: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a Localisation', () => {
      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addLocalisationToCollectionIfMissing', () => {
      it('should add a Localisation to an empty array', () => {
        const localisation: ILocalisation = { id: 123 };
        expectedResult = service.addLocalisationToCollectionIfMissing([], localisation);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(localisation);
      });

      it('should not add a Localisation to an array that contains it', () => {
        const localisation: ILocalisation = { id: 123 };
        const localisationCollection: ILocalisation[] = [
          {
            ...localisation,
          },
          { id: 456 },
        ];
        expectedResult = service.addLocalisationToCollectionIfMissing(localisationCollection, localisation);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Localisation to an array that doesn't contain it", () => {
        const localisation: ILocalisation = { id: 123 };
        const localisationCollection: ILocalisation[] = [{ id: 456 }];
        expectedResult = service.addLocalisationToCollectionIfMissing(localisationCollection, localisation);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(localisation);
      });

      it('should add only unique Localisation to an array', () => {
        const localisationArray: ILocalisation[] = [{ id: 123 }, { id: 456 }, { id: 37368 }];
        const localisationCollection: ILocalisation[] = [{ id: 123 }];
        expectedResult = service.addLocalisationToCollectionIfMissing(localisationCollection, ...localisationArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const localisation: ILocalisation = { id: 123 };
        const localisation2: ILocalisation = { id: 456 };
        expectedResult = service.addLocalisationToCollectionIfMissing([], localisation, localisation2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(localisation);
        expect(expectedResult).toContain(localisation2);
      });

      it('should accept null and undefined values', () => {
        const localisation: ILocalisation = { id: 123 };
        expectedResult = service.addLocalisationToCollectionIfMissing([], null, localisation, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(localisation);
      });

      it('should return initial array if no Localisation is added', () => {
        const localisationCollection: ILocalisation[] = [{ id: 123 }];
        expectedResult = service.addLocalisationToCollectionIfMissing(localisationCollection, undefined, null);
        expect(expectedResult).toEqual(localisationCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
