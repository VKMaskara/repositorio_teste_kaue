function ehPalindromo(palavra) {
    // transforma em minúsculas para não dar erro por causa de letras maiúsculas
    palavra = palavra.toLowerCase();

    // inverte a palavra
    let invertida = palavra.split("").reverse().join("");

    // compara se é igual
    return palavra === invertida;
}

// Testando
console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("radar")); // true
console.log(ehPalindromo("ovo"));   // true
console.log(ehPalindromo("cachorro")); // false
