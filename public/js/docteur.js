import Diagnostique from './diagnostique.js';

export default class Docteur {

    nom = "";
    argent = 0;
    cabinet = [];

    // création d'instances (objets) de la classe Diagnostique
    diagnostiques = [
        new Diagnostique('mal indenté', `alt+maj+f`),
        new Diagnostique('unsave', 'saveOnFocusChange'),
        new Diagnostique('404', 'CheckLinkRelation'),
        new Diagnostique('azmatique', 'Ventoline'),
        new Diagnostique('syntaxError', 'f12+doc')
    ];


    constructor(nom, argent, cabinet) {
        this.nom = nom;
        this.cabinet = cabinet;
        this.argent = argent;
    }

    diagnostique(patient) {
        switch (patient.étatSanté) {
            case 'malade':
                console.log(`Le patient ${patient.nom} est malade. Sa maladie est: ${patient.maladie}.`);
                break;
            case 'pas malade':
                console.log(`Le patient ${patient.nom} n'est pas malade.`);
                break;
            case 'mort':
                console.log(`Le patient ${patient.nom} est mort. Le docteur a peur!`);
                break;
            default: console.log(`Votre problème n'est pas dans mes compétences`);
        }
    }

    // retourne le traitement d'une maladie
    donnerTraitement(maladie) {
        const diagnostique = this.diagnostiques.find(diagnostique => maladie == diagnostique.maladie);
        if (diagnostique) {
            return diagnostique.traitement;
        }
    }


    patientIn(patient) {
        if (this.cabinet.length == 1) {
            this.cabinet.push(patient);
            console.log(`Le patient ${patient.nom} est bien rentré dans le cabinet`);
        } else {
            console.log(`Le patient ${patient.nom} ne peu pas rentré parce qu'il y a déja un patient dans le cabinet.`);
        }
    }

    patientOut(patient) {
        // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        if (this.cabinet.indexOf(patient) > -1) {
            this.cabinet.pop(patient);
            console.log(`Le patient ${patient.nom} est bien sorti dans le cabinet`);

        } else {
            console.log(`Le patient ${patient.nom} n'est pas dans le cabinet.`);
        }
    }

    // affiche le total de personnes du cabinet d'un docteur
    totalCabinet() {
        console.log(`Il y a ${this.cabinet.length} personne(s) dans le cabinet du docteur ${this.nom}`);
    }

}