import {Patient} from './patient';


let marcus = new Patient('Marcus','mal identité',100,'','malade');
let optimus = new Patient('Optimus','unsave',200,'','malade');
let sangoku = new Patient('Sangoku',404,80,'','malade');
let darthVader = new Patient('DarthVader','azmatique',110,'','malade');
let semicolon = new Patient('Semicolon','syntaxError',60,'','malade')

let montab = [marcus,optimus,sangoku,darthVader,semicolon]
console.log(montab);