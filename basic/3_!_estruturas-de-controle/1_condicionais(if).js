/*
condicionais(if, else, else if) :
 As condicionais permitem executar blocos de código com base em uma condição. O if executa um bloco de código se a condição for verdadeira; else é usado para executar algo se a condição for falsa; e else if permite testar múltiplas condições. 

 ex :
 */
let hora = 10;
if (hora < 12){
    console.log("Bom dia");
} else {
    console.log("Boa tarde");
};
//esse codigo esta certo mas a logica esta errada pois faltou o "Boa noite" uma outra condicinal seria nescessaria, aqui entra o else if
// ex :
if (hora < 12){
    console.log("Bom dia");
} else if(hora > 12 && hora < 24){
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
};

// agora o codigo esta com a logica correta ja que o "else if" funciona e o "Boa noite" foi adicionado 