export default class Diagnostique {

    maladie = "";
    traitement = "";

    constructor(maladie, traitement) {
        this.maladie = maladie;
        this.traitement = traitement;
    }

    getMaladie(){
        return this.maladie;
    }

    getTraitement(){
        return this.traitement;
    }

}