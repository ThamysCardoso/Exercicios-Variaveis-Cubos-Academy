let valorDoTenis = 129.99;
let meuDinheiro = 80.00;
const desconto = (meuDinheiro * 100) / valorDoTenis ;
let porcentagem = 100 - desconto;
console.log(`A porcentagem total de desconto necessário é ${porcentagem.toFixed(2)}%`);
