const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = false;

// tem ingresso E
// tem idade maior ou igual a censura OU está com os pais

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log("Pode entrar");
    } else {
        console.log("Barrado");
    }
} else {
    console.log("Barrada.");
}