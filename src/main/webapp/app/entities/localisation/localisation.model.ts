import { IEtablissement } from 'app/entities/etablissement/etablissement.model';
import { NomReg } from 'app/entities/enumerations/nom-reg.model';
import { NomDep } from 'app/entities/enumerations/nom-dep.model';

export interface ILocalisation {
  id?: number;
  region?: NomReg;
  departement?: NomDep;
  commune?: string | null;
  etablissements?: IEtablissement[] | null;
}

export class Localisation implements ILocalisation {
  constructor(
    public id?: number,
    public region?: NomReg,
    public departement?: NomDep,
    public commune?: string | null,
    public etablissements?: IEtablissement[] | null
  ) {}
}

export function getLocalisationIdentifier(localisation: ILocalisation): number | undefined {
  return localisation.id;
}
