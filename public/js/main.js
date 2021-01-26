import Patient from './patient.js';
import Docteur from './docteur.js';
import Lieu from './lieu.js';
import Tarif from './tarif.js';

//////////////////////// Création des données ////////////////////////
// énumération pour les états de santé
const étatsDeSantés = {
    MALADE: "malade",
    PAS_MALADE: "pas malade",
    MORT: "mort"
}

// énumération pour l'état de la poche
const étatsPoche = {
    VIDE: "vide",
    PAS_VIDE: "pas vide"
}

// création d'instances (objets) de la classe Patient
let patient1 = new Patient('Marcus', 'mal indenté', 100, étatsPoche.VIDE, étatsDeSantés.MALADE);
let patient2 = new Patient('Optimus', 'unsave', 200, étatsPoche.VIDE, étatsDeSantés.MALADE);
let patient3 = new Patient('Sangoku', '404', 80, étatsPoche.VIDE, étatsDeSantés.MALADE);
let patient4 = new Patient('DarthVader', 'azmatique', 110, étatsPoche.VIDE, étatsDeSantés.MALADE);
let patient5 = new Patient('Semicolon', 'syntaxError', 60, étatsPoche.VIDE, étatsDeSantés.MALADE);

let patients = [patient1, patient2, patient3, patient4, patient5];

// création d'une instance (objet) de la classe Docteur
let docteur1 = new Docteur('Debugger', 0, ['chat']);

// création d'instances (objets) de la classe Lieu
let lieu1 = new Lieu("salle d'attente", [patient1, patient2, patient3, patient4, patient5]);
let lieu2 = new Lieu('pharmacie', []);
let lieu3 = new Lieu('cimtière', []);

// création d'instances (objets) de la classe Tarif
let tarif1 = new Tarif('alt+maj+f', 60);
let tarif2 = new Tarif('saveOnFocusChange', 100);
let tarif3 = new Tarif('CheckLinkRelation', 35);
let tarif4 = new Tarif('Ventoline', 40);
let tarif5 = new Tarif('f12+doc', 20);

let tarifs = [tarif1, tarif2, tarif3, tarif4, tarif5];

//////////////////////// Logique de l'application ////////////////////////


// boucle pour faire passer tous les patients chez le docteur
patients.forEach(patient => {

    // docteur1 reçoit un patient dans son cabinet et l'affiche
    docteur1.patientIn(patient);
    console.log(`Le docteur reçois ${patient.nom} dans son cabinet`);

    // retire le patient de la salle d'attente et l'affiche 
    lieu1.contenu.pop(patient);
    console.log(`Le patient ${patient.nom} n'est plus dans la salle d'attente.`);

    // le docteur diagnostique le patient qui est dans son cabinet
    docteur1.diagnostique(docteur1.cabinet[1]);

    // fait payer le patient
    const traitement = docteur1.donnerTraitement(docteur1.cabinet[1].maladie);

    // ajoute l'argent de la consultation au docteur et l'affiche
    docteur1.argent += 50;
    console.log(`Après la consultation du ${docteur1.cabinet[1].nom} le docteur a ${docteur1.argent} $`);

    // retire l'argent de la consultation au patient et l'affiche
    docteur1.cabinet[1].argent -= 50;
    console.log(`Après sa consultation, le patient ${docteur1.cabinet[1].nom} a ${docteur1.cabinet[1].argent} $`);

    // donne le traitement du patient après une consultation et l'affiche
    console.log(`Le traitement du patient ${docteur1.cabinet[1].nom} est ${traitement}`);

    // fait sortir le patient du cabinet
    docteur1.cabinet.pop(docteur1.cabinet[1])
    console.log(`Il reste dans le cabinet: `);
    docteur1.cabinet.forEach(element => {
        console.log(element);
    });

    // aller à la pharmacie
    lieu2.contenu.push(patient)
    console.log(`Il y a dans la pharmacie: `);
    lieu2.contenu.forEach(patient => {
        console.log(patient);
    });

    // cobstante pour récupérer l'objet tarif lié a un traitement
    const tarif = tarifs.find(tarif => traitement == tarif.traitement);
    // initialisation du prix du traitement
    let prixDuTraitement = 0;
    // si l'objet tarif exciste, son prix est donner a prixDuTraitement
    if (tarif) {
        prixDuTraitement = tarif.prix;
    }

    // le patient reçevra son traitement si il a assez d'argent
    if (patient.argent >= prixDuTraitement) {
        // le prix du traitement est déduit de l'argent du patient
        patient.argent -= prixDuTraitement;
        console.log(`Après avoir payer son traitement il reste ${patient.argent} au patient ${patient.nom}`);
        // le patient mets le traitement dans sa poche
        patient.poche = traitement;
        console.log(`Le patient ${patient.nom} a le traintement ${patient.poche} dans sa poche.`);
        // le patient quitte la pharmacie
        lieu2.contenu.pop(patient);
        patient.étatSanté = étatsDeSantés.PAS_MALADE;
        console.log(`Le patient ${patient.nom} a maintenant l'état de santé: ${patient.étatSanté}.`);
    } else {
        console.log(`Le patient ${patient.nom} n'a pas assez d'argent pour le traitement: ${traitement} `);
        patient.étatSanté = étatsDeSantés.MORT;
        console.log(`Le patient ${patient.nom} meurt. `);
        // le patient quitte la pharmacie
        lieu2.contenu.pop(patient);
        lieu3.contenu.push(patient);
        console.log(`Le patient ${patient.nom} est amené au cimtière. RIP`);
    }

    console.log(``);
    console.log(`#################################################################`);
    console.log(``);

});

console.log(`Bilan:`);
console.log(`Nombre de personne(s) dans la salle d'attente: ${lieu1.contenu.length}`);
console.log(`Nombre de personne(s) dans le cabinet: ${docteur1.cabinet.length}`);
console.log(`Nombre de personne(s) dans la pharmarcie: ${lieu2.contenu.length}`);
console.log(`Nombre de personne(s) dans le cimetière: ${lieu3.contenu.length}`);

// le chat miaule toute les deux seconces et l'affiche
setInterval(function () {
    console.log(`Le chat miaule: MIAAAUW`)
    new Audio('../cat.mp3').play();
}, 2000);
