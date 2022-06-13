export class Cv {
    id:number;
    noms: string;
    prenoms: string;
    adresse: string;
    nationalite: string;
    dateNaisance: Date;
    lieuNaissance: string;
    contact: Contact;
    occupation:string;
    photo: string;
    descriptionformations: string;
    email:Emails;
    comptescv: Compte;
    formation: Formation;
    experiences: Experience;
    competences: Competences;
    langues: Langues;
    loisirs: Loisirs;
    textprofile: string;
    // compte: Compte;
    // lien: string;
    // contact: Contact;
    // formation: Formation;
    // etablissement: string;
    // villeformation: string;
    // datedebut: Date;
    // datefin: Date;
    // descriptionformations: string;
    // poste: string;
    // employer: string;
    // villeexperience: string;
    // descriptiionexperience: string;
    // competences: Competences;
    // niveau: number;
    // noms: string;
    // prenoms: string;
    // adresse: string;
    // nationalite: string;
    // datenaisance: Date;

 
}

export class Contact{
    id : number;
    contact : number;
    constructor(id:number, numero:number){
        this.id = id;
        this.contact = numero;
    }
}
export class Compte{
    id: number;
    nom: string;
    lien: string;
    constructor(id: number, nom: string,lien: string){
             this.id = id;
             this.nom= nom;
             this.lien= lien;
    }
}
export class Formation{
    id: number;
    diplome: string;
    ecole: string;
    periode: Date;
    constructor(id: number,diplome: string,ecole: string,periode:Date){
           this.id= id;
           this.diplome= diplome;
           this.ecole= ecole;
           this.periode = periode;
    }
}
export class Experience{
    id: number;
    titre: string;
    entreprise: string;
    periode: Date;
    details: string;
    constructor(id:number,titre:string,entreprise:string,periode:Date,details:string){
             this.id= id;
             this.titre =titre;
             this.entreprise = entreprise;
             this.periode = periode;
             this.details = details;

    }
}
export class Competences{
    id: number;
    nom: string;
    niveau: number;
    constructor(id:number,nom:string,niveau:number){
          this.id=id;
          this.nom= nom;
          this.niveau = niveau;
    }
}
export class Langues{
    id: number;
    nom: string;
    niveau: number;
    constructor(id:number,nom:string,niveau:number){
         this.id= id;
         this.nom = nom;
         this.niveau = niveau;
    }
}
export class Loisirs{
    id: number;
    nom: string;
    constructor(id:number,nom:string){
           this.id = id;
           this.nom= nom;
    }
    
}
export class Emails{
    id: number;
    email: string;
    constructor(id:number,email:string){
          this.id = id;
          this.email= email;
    }
}