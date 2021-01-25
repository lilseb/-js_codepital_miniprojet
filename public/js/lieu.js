export default class Lieu {

    nom = "";
    contenu = [];

    constructor(nom, contenu) {
        this.nom = nom;
        this.contenu = contenu;
    }
    // affiche le total de personnes d'un Lieu
    totalContenu() {
        console.log(`Il y a ${this.contenu.length} personne(s) dans le/la ${this.nom}`);
    }
}