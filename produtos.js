let produtos = [
    {
    nome: "Notebook",
    preco: 2500,
}, {
    nome: "Smartphone",
    preco: 1500,
}, {
    nome: "Camiseta",
    preco: 50,
}, {
    nome: "Calça Jeans",
    preco: 120,
}
]

let produtoMaisCaro = produtos[0];

for(let i = 1; i < produtos.length; i++){
    if(produtos[i].preco > produtoMaisCaro.preco){
        produtoMaisCaro = produtos[i];
    }
}

console.log(`O produto mais caro é ${produtoMaisCaro.nome} que custa R$${produtoMaisCaro.preco}`);
// Saída: O produto mais caro é Notebook que custa R$2500