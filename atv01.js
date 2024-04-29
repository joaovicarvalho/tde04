// soma que retorna um número par
function soma(a, b) {
    const resultado = a + b;
    if (resultado % 2 === 0) {
        return resultado;
    } else {
        throw new Error(`Resultado ${resultado} é ímpar.`);
    }
}


function callbackSucesso(resultado) {
    console.log(`Operação concluída com sucesso. O resultado (${resultado}) é par.`);
}


function callBackError(erro) {
    console.error(`A operação falhou. ${erro.message}`);
}

try {
    const resultado1 = soma(4, 6);
    callbackSucesso(resultado1); 
} catch (erro) {
    callBackError(erro);
}

try {
    const resultado2 = soma(3, 5);
    callbackSucesso(resultado2);
} catch (erro) {
    callBackError(erro); 
}
