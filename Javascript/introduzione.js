// JavaScript source code
function sum(a, b) {
    //console.log(a + b);
    return a + b;
}

//stampare un messaggio su console
console.log("Un messaggio da visualizzare a console");

//Dichiarazione di variabili
let x;
var y;

x = 5;
let z = 7;
z = "7";

const costante = 10;
//costante = 90; una costante non può essere modificata

//ARRAY
let primoArray = [1, 2, 3];
primoArray = [1, 'Antonia', 2, true, 4.5]

let primoElemento = primoArray[0];
console.log(primoElemento);

primoArray.push("prova", "inserimento");
primoArray.pop(); //elimina l'elemento in ultima posizione

primoArray.splice(0, 1);

let food = ["uova", "pane", "pasta", "frutta"]
//recupera il primo elemento che rispetta la condizione
let foodWithU = food.find((item) => item.startsWith("a")); 
//fornisce un array con gli elementi che rispettano la condizione
let itemsWithP = food.filter((item) => item.startsWith("p"))

//ordinamento di un array
food.sort();
//inversione dell'ordinamento
food.reverse();

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}


class Persona {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //setter
    set firstName(value) {
        this._firstName = value;
    }

    set lastName(value) {
        this._lastName = value;
    }

    //getter
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let pers = new Persona("Mario", "Rossi");
console.log(pers.getFullName());


//utilizzo dell'operatore di uguaglianza ===
let r = 4;
let t = "4";
let q = 4;
console.log(r == t);
console.log(r === t);
console.log(q === r);




