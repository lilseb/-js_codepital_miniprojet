export default class Docteur {

    nom = "";
    argent = 0;
    cabinet = [];


    constructor(nom, argent, cabinet) {
        this.nom = nom;
        this.cabinet = cabinet;
        this.argent = argent;

    }

    diagnostique() {

    }

    patientIn(patient) {
        if (this.cabinet.length == 1) {
            this.cabinet.push(patient);
            console.log(`Le patient ${patient.nom} est bien rentré dans le cabinet`);
        } else {
            console.log('Il y a déja un patient dans le cabinet.');
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