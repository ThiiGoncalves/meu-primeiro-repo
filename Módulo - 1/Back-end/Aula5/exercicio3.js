const prdutosConsumidos = [
    {
        nome: "Pão de Alho",
        precoUnit: 1500,
        quantidade: 5
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

//console.log(cartao);//cartao completo
console.log(cartao.nome); //Thiago
console.log(cartao.idade); //31
cartao.idade = 32;
console.log(cartao.idade);//32
console.log(cartao.prdutosConsumidos[0].nome);//pao de alho
console.log(cartao.prdutosConsumidos[prdutosConsumidos.length - 1].precoUnit);