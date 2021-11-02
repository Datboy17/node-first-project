console.log("Somma e media")

let n1 = 3;
let n2 = 4;
let n3 = 8;
let n4 = 3;
let n5 = 7;


    let somma = n1 + n2 + n3 + n4 + n5;
    let media = somma / 5;
    console.log ("La somma è:", somma, "e la media è:", media);

    console.log("----------------------------------------------")

const array = [3,4,8,3,7];
let forSum = 0;

for (let num of array) {
    forSum = forSum + num;
}

const forMed = forSum / array.length;

console.log ("La somma è:", forSum, "e la media è:", forMed);
