import { IBon } from 'app/entities/bon/bon.model';
import { IPersonnel } from 'app/entities/personnel/personnel.model';
import { IClasse } from 'app/entities/classe/classe.model';
import { ILocalisation } from 'app/entities/localisation/localisation.model';
import { IInspection } from 'app/entities/inspection/inspection.model';
import { TypeEtab } from 'app/entities/enumerations/type-etab.model';
import { StatutEtab } from 'app/entities/enumerations/statut-etab.model';

export interface IEtablissement {
  id?: number;
  nomEtab?: string;
  typeEtab?: TypeEtab;
  statut?: StatutEtab;
  email?: string;
  latitude?: number | null;
  longitude?: number | null;
  matriculeEtab?: string | null;
  bons?: IBon[] | null;
  personnel?: IPersonnel[] | null;
  classes?: IClasse[] | null;
  localisation?: ILocalisation | null;
  inspection?: IInspection | null;
}

export class Etablissement implements IEtablissement {
  constructor(
    public id?: number,
    public nomEtab?: string,
    public typeEtab?: TypeEtab,
    public statut?: StatutEtab,
    public email?: string,
    public latitude?: number | null,
    public longitude?: number | null,
    public matriculeEtab?: string | null,
    public bons?: IBon[] | null,
    public personnel?: IPersonnel[] | null,
    public classes?: IClasse[] | null,
    public localisation?: ILocalisation | null,
    public inspection?: IInspection | null
  ) {}
}

export function getEtablissementIdentifier(etablissement: IEtablissement): number | undefined {
  return etablissement.id;
}
