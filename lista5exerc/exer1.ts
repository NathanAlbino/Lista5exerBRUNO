const entrada = require("readline-sync");

let numeros: number[] = []
let maior: number = 0;
let menor: number = 0;
for (let i = 0; i <15; i++){
 numeros[i] = parseFloat(entrada.question(""));
}
for(let i = 0; i < 15; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
    if(numeros[1] < menor){
        menor = numeros[1];
    }
}

console.log(maior);
console.log(menor);