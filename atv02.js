//Utilize a função anterior para criar uma promise que tenha:

// then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
// catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.

function soma(a, b, callbackSucesso, callBackError) {
    let resultado = a + b;
    if (resultado % 2 === 0) {
        callbackSucesso();
    }
    else
        callBackError();
}                               
function callbackError() {
    console.log("Erro : a soma dos numeros é impar ");
}       
function callbackSucesso() {
    console.log("Sucesso : a soma dos numeros é par ")
}
soma(10, 30, callbackSucesso, callbackError);
soma(21,8, callbackSucesso, callbackError);