function lerMatriz(matriz){
    for(let i=0; i<12;i++){
        matriz[i] = []
        for(let j=0; j<4;j++){
            matriz[i][j] = parseInt(math.random()*(10000 - 1000 +1)+1000)
        }
    }
}
function calculaTotalMes(matriz, meses){
    for(let i=0; i<12;i++){
        let soma = 0 
        for(let j=0; j<4;j++){
            soma = soma + matriz[i][j]
        }
    }
    console.log(`Total vendido em ${meses[i]} foi ${soma.toFixed(2)}`)
}
function calcularTotalSemana(matriz){
    for(let j=0;j<4;j++){
        let soma = 0 
        for(let i=0; i<12;i++){
            soma = soma + matriz[i][j]
        }
    }
    console.log(`A semana ${j+1} Vendeu ${soma.toFixed(2)}`)

}
function calculaTotalnoAno(matriz){
    soma = 0 
    for(let i=0; i<12;i++){
        for(let j=0; j<4;j++){
            soma = soma + matriz[i][j]
        }
    }
    console.log(`Total vendido no ano ${soma.toFixed(2)}`)
}

function principal(){
    let meses = ("Janeiro", "Fevereiro", "Março","Abril", "Maio","Junho",
    "Julho","Agosto", "Setembro", "Outubro","Novembro", "Dezembro")
    let matriz = []
    lerMatriz(matriz, meses);
    calculaTotalMes(matriz, meses);
    calcularTotalSemana(matriz);
    calculaTotalnoAno(matriz)
}
principal()