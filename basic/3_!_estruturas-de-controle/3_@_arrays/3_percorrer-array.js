/*
um pouco de logica de programacao agora
aqui eu mostrarei como percorrer entre os valores dos arrays
podemos fazer isso de duas formas
a forma que o iniciante faz : usando For
e a que usamos o forEach
*/

//for
let frutas = ["maça", "banana","laranja"];

for(let i = 0; i < frutas.length; i++){
//primeiro tempos nossa expressao (bem normal)
    console.log(frutas[i]);
/*aqui temos o nosso console 
lembra que nos usamos frutas[1] para imprimir o valor dentro do array 
o "i" faz o trabalho do numero que iriamos colocar la
sempre que o for conclui um ciclo ele adiciona 1 ao "i" e assim nos podemos percorrer todos os valores dentro do array*/
}

frutas.forEach(function(fruta){
    console.log(fruta);
})
// este metodo foreach sera abordado em breve então não ligue muito para ele nesse momento
