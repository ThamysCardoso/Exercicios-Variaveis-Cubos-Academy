let populacaoInfectadaInicial = 1000
let possibilidadeDeInfeccao = 4
let tempo = 7

let populacaoInfectadaFinal = populacaoInfectadaInicial * possibilidadeDeInfeccao/(tempo/7);

console.log(`A quantidade de pessoas infectadas é de ${populacaoInfectadaFinal}`);