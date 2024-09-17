/*
switch : e outra forma de executar diferentes blocos de codigo com base no valor de uma variavel ou expressão. Cada bloco e especificado por um "case". O default e executado quando nenhum dos casos anteriores e verdadeiro
ex :
 */
let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("terça-Feira");
        break;
    case 3:
        console.log("quarta-Feira");
        break;
    case 4:
        console.log("quinta-Feira");
        break;
    case 5:
        console.log("sexta-Feira");
        break;
    case 6:
        console.log("sabado");
        break;
    case 7:
        console.log("domingo-Feira");
        break;
    default:
        console.log(`error: valor "dia" incorreto`);
}