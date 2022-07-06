const professores = require('../bancoDeDados')

const filtrarProfessores = (req, res) => {

    const { stack } = req.query;
    let resultado = professores;

    console.log('cheguei no controlador de listagem do professor..');

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });
    }



    res.send(resultado);
}

const encontrarUmProfessor = (req, res) => {
    console.log('Rota para encontrar um professor..');

    const professoresEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    });
    res.send(professoresEncontrado);
}


module.exports = {
    filtrarProfessores,
    encontrarUmProfessor,

}