// auth.js

function gerarTokenJWT(usuario) {
    return `token-${usuario}`;
}

module.exports = { gerarTokenJWT };