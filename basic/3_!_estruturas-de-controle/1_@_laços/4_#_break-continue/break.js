/*
    break : O break e usado para interromper completamente a execução de um laço(for, while, do while...).
    quando o break e encontrado, o laço para imediatamente, e o codigo apos o laço continua a ser executado

    funcionamento : o break pode ser usado quando voce deseja sair de um laço antes que todas interaçoes sejam completas, com base em uma determinada condição.
ex :
    */

//imagine que voce quer percorrer numeros de 0 a 9, mas quer parar quando encontrar o numero 5
for(let i = 0; i< 10; i++){ //aqui e a expressao
    if(i === 5) { //entenda o "if" como um "se" (se i for igual a 5 {rodar codigo ou retorna true para rodar o codigo})
    //veremos mais do "if" daqui a pouco
        break; // o break vai ser executado caso a expressão acima for true (verdadeira)
    }
    console.log(i); // printa o valor do indice (geralmente o indice e chamado de "i")
}
console.log("fim do laço"); // isso sera executado quando o a expressao do "if" for verdadeira

// codigo seco (sem comentarios) abaixo

for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}