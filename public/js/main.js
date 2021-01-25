import  Patient  from './patient.js';
import  Docteur  from './docteur.js';
import  Diagnostique  from './diagnostique.js';
import  Lieu  from './lieu.js';
import Tarif from './tarif.js'
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
let patient1 = new Patient('Marcus', 'mal identité', 100, étatsPoche.VIDE, étatsDeSantés.MALADE);
let patient2 = new Patient('Optimus', 'unsave', 200, étatsPoche.VIDE, étatsDeSantés.MALADE);
let patient3 = new Patient('Sangoku', '404', 80, étatsPoche.VIDE, étatsDeSantés.MALADE);
let patient4 = new Patient('DarthVader', 'azmatique', 110, étatsPoche.VIDE, étatsDeSantés.MALADE);
let patient5 = new Patient('Semicolon', 'syntaxError', 60, étatsPoche.VIDE, étatsDeSantés.MALADE)

// création d'une instance (objet) de la classe Docteur
let docteur1 = new Docteur('Debugger', 0, ['chat']);

// création d'instances (objets) de la classe Diagnostique
const diagnostique1 = new Diagnostique('mal indenté', `alt+maj+f`);
const diagnostique2 = new Diagnostique('unsave', 'saveOnFocusChange');
const diagnostique3 = new Diagnostique('404', 'CheckLinkRelation');
const diagnostique4 = new Diagnostique('azmatique', 'Ventoline');
const diagnostique5 = new Diagnostique('syntaxError', 'f12+doc');

// création d'instances (objets) de la classe Lieu
let lieu1 = new Lieu("salle d'attente", [patient1, patient2, patient3, patient4, patient5]);
let lieu2 = new Lieu('pharmacie', []);
let lieu3 = new Lieu('cimtière', []);

// création d'instances (objets) de la classe Tarif
const tarif1 = new Tarif('ctrl+maj+f', 60);
const tarif2 = new Tarif('saveOnFocusChange', 100);
const tarif3 = new Tarif('CheckLinkRelation', 35);
const tarif4 = new Tarif('Ventoline', 40);
const tarif5 = new Tarif('f12+doc', 20);

//////////////////////// Logique de l'application ////////////////////////

// docteur1 reçois patient1 dans son cabinet
docteur1.patientIn(patient1);

