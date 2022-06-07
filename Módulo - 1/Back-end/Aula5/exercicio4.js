const prdutosConsumidos = [
    {
        nome: "Pão de Alho",
        precoUnit: 1500,
        quantidade: 3
    },
    {
        nome: "Cerveja",
        precoUnit: 1000,
        quantidade: 2
    },
    {
        nome: "Água",
        precoUnit: 500,
        quantidade: 1
    }
]

const cartao = {
    nome: "Thiago",
    idade: 31,
    prdutosConsumidos
};

let totalAPagar = 0;
for (let produto of prdutosConsumidos) {
    totalAPagar += produto.precoUnit * produto.quantidade;
}

const totalFormatado = (totalAPagar / 100).toFixed(2);

console.log(`Olá Srº ${cartao.nome}, o total de sua conta é R$ ${totalFormatado}`);
