let fatorial = 10;
let resultado = 1;

for (let i = fatorial; i >= 1; i--) {
    resultado *= i; // acumula a multiplicação
    console.log(`i: ${i}, resultado parcial: ${resultado}`);
}

console.log(`O fatorial de ${fatorial} é ${resultado}`);
