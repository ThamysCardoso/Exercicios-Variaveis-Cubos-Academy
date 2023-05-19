let montante = 90000;
let capitalInicial = 60000;
let meses = 24;
let cEm = montante/capitalInicial;
let Meses = 1/meses;
let taxaDeJuros = (cEm ** Meses) - 1;
let jurosPorcetagem = (taxaDeJuros)*100;

console.log(`O valor da taxa do juros é de ${jurosPorcetagem.toFixed(3)}% ao mês`);
