export class Cv {
    id:number;
    noms: string;
    prenoms: string;
    adresse: string;
    nationalite: string;
    dateNaisance: Date;
    lieuNaissance: string;
    contact: Contact[] = [];
    occupation:string;
    photo: string;
    email:Emails;
    socials: Compte[];
    formation: Formation[] = [];
    experiences: Experience[] = [];
    competences: Competences;
    langues: Langues[] = [];
    loisirs: string[] = [];
    profile: string;
}

export class Contact{
    id : number;
    contact : string;
    constructor(id:number, numero:string){
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
    structure:string;
    lieu: string;
    dateDebut: string;
    dateFin: string;
    description:string;
    constructor(id: number,diplome: string, structure:string, lieu: string,dateDebut: string, dateFin: string, description:string){
           this.id= id;
           this.diplome= diplome;
           this.structure= structure;
           this.lieu= lieu;
           this.dateDebut = dateDebut;
           this.dateFin = dateFin;
           this.description = description;
    }
}
export class Experience{
    id: number;
    titre: string;
    entreprise: string;
    periode: String;
    description: string;
    constructor(id:number,titre:string,entreprise:string,periode:string,description:string){
             this.id= id;
             this.titre =titre;
             this.entreprise = entreprise;
             this.periode = periode;
             this.description = description;

    }
}
export class Competences{
    id: number;
    nom: string;
    niveau: number;
    categorie:string;
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
export class Emails{
    id: number;
    email: string;
    constructor(id:number,email:string){
          this.id = id;
          this.email= email;
    }
}