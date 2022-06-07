const valorDaCompra = 100;
const numeroDeParcelas = 7;

if (numeroDeParcelas === 1) {
    // a vista - com 10% de desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar ${valorAPagar.toFixed(2)}, pois á vista tem 10% de desconto`);
} else {
    //parcelado
    const valorDaParcela = (valorDaCompra / numeroDeParcelas);
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela.toFixed(2)}`);
}