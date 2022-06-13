import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  
  private _textprofile: string;
  private _comptes: string;
  private _lien: string;
  private _contact: number;
  private _formation: string;
  private _etablissement: string;
  private _villeformation: string;
  private _datedebut: Date;
  private _datefin: Date;
  private _descriptionformations: string;
  private _poste: string;
  private _employer: string;
  private _villeexperience: string;
  private _descriptiionexperience: string;
  private _competences: string;
  private _niveau: number;
  private _nom: string;
  private _prenom: string;
  private _adresse: string;
  private _nationalite: string;
  private _datenaisance: Date;
  private _langues: string;
  private _loisirs: string;

  get textprofile() {
    return this._textprofile;
  }

  set textprofile(textprofile: string) {
    this._textprofile = textprofile;
  }

  get comptes() {
    return this._comptes;
  }

  set comptes(comptes: string) {
    this._comptes = comptes;
  }
  get lien() {
    return this._lien;
  }

  set lien(lien: string) {
    this._lien = lien;
  }

  get contact() {
    return this._contact;
  }

  set contact(contact: number) {
    this._contact = contact;
   }

   get formation() {
    return this._formation;
  }

  set formation(formation: string) {
    this._textprofile = formation;
  }

  get etablissement() {
    return this._etablissement;
  }

  set etablissement(_etablissement: string) {
    this._etablissement = _etablissement;
  }
  get villeformation() {
    return this._villeformation;
  }

  set villeformation(_villeformation: string) {
    this._villeformation = _villeformation;
  }

  get datedebut() {
    return this._datedebut;
  }

  set datedebut(_datedebut: Date) {
    this._datedebut = _datedebut;
   }

   //
   get datefin() {
    return this._datefin;
  }

  set datefin(_datefin: Date) {
    this._datefin = _datefin;
  }

  get descriptionformations() {
    return this._descriptionformations;
  }

  set descriptionformations(_descriptionformations: string) {
    this._descriptionformations = _descriptionformations;
  }
  get poste() {
    return this._poste;
  }

  set poste(_postet: string) {
    this._poste = _postet;
  }

  get nationalite() {
    return this._nationalite;
  }

  set nationalite(_nationalite: string) {
    this._nationalite = _nationalite;
   }

   get datenaisance() {
    return this._datenaisance;
  }

  set datenaisance(_datenaisance: Date) {
    this._datenaisance = _datenaisance;
  }

  get langues() {
    return this._langues;
  }

  set langues(_langues: string) {
    this._langues = _langues;
  }
  get loisirs() {
    return this._loisirs;
  }

  set loisirs(_loisirs: string) {
    this._loisirs = _loisirs;
  }

  get niveau() {
    return this._niveau;
  }

  set niveau(_niveau: number) {
    this._niveau = _niveau;
   }

   //
   get nom() {
    return this._nom;
  }

  set nom(_nom: string) {
    this._nom = _nom;
  }

  get prenom() {
    return this._prenom;
  }

  set prenom(_prenom: string) {
    this._prenom = _prenom;
  }
  get adresse() {
    return this._adresse;
  }

  set adresse(_adresse: string) {
    this._adresse = _adresse;
  }

  get employer() {
    return this._employer;
  }

  set employer(_employer: string) {
    this._employer = _employer;
   }

   get villeexperience() {
    return this._villeexperience;
  }

  set villeexperience(_villeexperience: string) {
    this._villeexperience = _villeexperience;
  }

  get descriptiionexperience() {
    return this._descriptiionexperience;
  }

  set descriptiionexperience(_descriptiionexperience: string) {
    this._descriptiionexperience = _descriptiionexperience;
  }
  get competences() {
    return this._competences;
  }

  cv = new Cv();
  constructor() {
   }
}

