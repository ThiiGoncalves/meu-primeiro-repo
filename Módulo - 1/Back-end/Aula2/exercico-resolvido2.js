const valorDaCompra = 100;
const numeroDeParcelas = 0;

if (numeroDeParcelas === 1) {
    // a vista - com 10% de desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar ${valorAPagar}, pois á vista tem 10% de desconto`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //parcelado sem juros
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de R$ ${valorDaParcela}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    // parcela com juros
    const valorAPagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros}, devido a incidencia de valorAPagarComJuros.`);
} else {
    //numero de parcelas invalido
    console.log("Número de parcelas inválido");
}