import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'localisation',
        data: { pageTitle: 'dbGestionMatriculeApp.localisation.home.title' },
        loadChildren: () => import('./localisation/localisation.module').then(m => m.LocalisationModule),
      },
      {
        path: 'inspection',
        data: { pageTitle: 'dbGestionMatriculeApp.inspection.home.title' },
        loadChildren: () => import('./inspection/inspection.module').then(m => m.InspectionModule),
      },
      {
        path: 'etablissement',
        data: { pageTitle: 'dbGestionMatriculeApp.etablissement.home.title' },
        loadChildren: () => import('./etablissement/etablissement.module').then(m => m.EtablissementModule),
      },
      {
        path: 'apprenant',
        data: { pageTitle: 'dbGestionMatriculeApp.apprenant.home.title' },
        loadChildren: () => import('./apprenant/apprenant.module').then(m => m.ApprenantModule),
      },
      {
        path: 'inscription',
        data: { pageTitle: 'dbGestionMatriculeApp.inscription.home.title' },
        loadChildren: () => import('./inscription/inscription.module').then(m => m.InscriptionModule),
      },
      {
        path: 'personnel',
        data: { pageTitle: 'dbGestionMatriculeApp.personnel.home.title' },
        loadChildren: () => import('./personnel/personnel.module').then(m => m.PersonnelModule),
      },
      {
        path: 'poste',
        data: { pageTitle: 'dbGestionMatriculeApp.poste.home.title' },
        loadChildren: () => import('./poste/poste.module').then(m => m.PosteModule),
      },
      {
        path: 'classe',
        data: { pageTitle: 'dbGestionMatriculeApp.classe.home.title' },
        loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule),
      },
      {
        path: 'carte-scolaire',
        data: { pageTitle: 'dbGestionMatriculeApp.carteScolaire.home.title' },
        loadChildren: () => import('./carte-scolaire/carte-scolaire.module').then(m => m.CarteScolaireModule),
      },
      {
        path: 'diplome',
        data: { pageTitle: 'dbGestionMatriculeApp.diplome.home.title' },
        loadChildren: () => import('./diplome/diplome.module').then(m => m.DiplomeModule),
      },
      {
        path: 'niveau-etude',
        data: { pageTitle: 'dbGestionMatriculeApp.niveauEtude.home.title' },
        loadChildren: () => import('./niveau-etude/niveau-etude.module').then(m => m.NiveauEtudeModule),
      },
      {
        path: 'serie-etude',
        data: { pageTitle: 'dbGestionMatriculeApp.serieEtude.home.title' },
        loadChildren: () => import('./serie-etude/serie-etude.module').then(m => m.SerieEtudeModule),
      },
      {
        path: 'filiere-etude',
        data: { pageTitle: 'dbGestionMatriculeApp.filiereEtude.home.title' },
        loadChildren: () => import('./filiere-etude/filiere-etude.module').then(m => m.FiliereEtudeModule),
      },
      {
        path: 'releve-note',
        data: { pageTitle: 'dbGestionMatriculeApp.releveNote.home.title' },
        loadChildren: () => import('./releve-note/releve-note.module').then(m => m.ReleveNoteModule),
      },
      {
        path: 'note-programme',
        data: { pageTitle: 'dbGestionMatriculeApp.noteProgramme.home.title' },
        loadChildren: () => import('./note-programme/note-programme.module').then(m => m.NoteProgrammeModule),
      },
      {
        path: 'demande-mat-app',
        data: { pageTitle: 'dbGestionMatriculeApp.demandeMatApp.home.title' },
        loadChildren: () => import('./demande-mat-app/demande-mat-app.module').then(m => m.DemandeMatAppModule),
      },
      {
        path: 'demande-mat-etab',
        data: { pageTitle: 'dbGestionMatriculeApp.demandeMatEtab.home.title' },
        loadChildren: () => import('./demande-mat-etab/demande-mat-etab.module').then(m => m.DemandeMatEtabModule),
      },
      {
        path: 'matiere',
        data: { pageTitle: 'dbGestionMatriculeApp.matiere.home.title' },
        loadChildren: () => import('./matiere/matiere.module').then(m => m.MatiereModule),
      },
      {
        path: 'image',
        data: { pageTitle: 'dbGestionMatriculeApp.image.home.title' },
        loadChildren: () => import('./image/image.module').then(m => m.ImageModule),
      },
      {
        path: 'bon',
        data: { pageTitle: 'dbGestionMatriculeApp.bon.home.title' },
        loadChildren: () => import('./bon/bon.module').then(m => m.BonModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
