let notas = [10,2,5,9]

function media(notas){
    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
   
    const media = soma / notas.length;

    console.log(`A média do aluno é ${media}`)
}

media(notas);