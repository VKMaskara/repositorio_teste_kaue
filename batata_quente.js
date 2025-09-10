let contagem = 100

for(let i = 0; i <= contagem; i++){
    if(i % 3 == 0){
        console.log('Batata')
    }else if(i % 5 == 0){
        console.log('Quente')
    } if (i % 3 == 0 && i % 5 == 0){
        console.log('Batata Quente')
    }
}