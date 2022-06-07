function saudacao(callback) {
    const nome = 'Thiago';
    callback(nome);
}

saudacao(function (nome) {
    console.log(`Bem vindo ${nome}`);
});