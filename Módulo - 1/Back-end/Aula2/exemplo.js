const temingresso = true;
const censura = 16;
const idade = 14;

// ter ingresso e ter idade maior ou igual a censura

if (temingresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar.");

    } else {
        console.log("Barrada pela censura.");
    }

} else {
    console.log("Barrada por falta de ingresso.");
}