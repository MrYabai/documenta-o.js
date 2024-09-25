/*
    continui : o continue pula a interação atual do laço e passa imediatamente para a proxima interação ao contrario do break, ele não interrompe o laço completamene. ele apenas ignora o restante do codigo naquela interação e continua o laço a partir do proximo ciclo
    
    funcionamento : use o continue quando voce quer pular certas interaçoes do laço, mas ainda não quer que o laço continue rodando para os proximos valores

ex :
    */

//imagine que voce quer percorrer numeros de 0 a 9, mas quer pular os pares
for(let i = 0; i < 10; i++){ //expresão
    if(i % 2 === 0){ //entenda o if como "se", 
        continue; //sera executado caso a função retorne "true"
    }
    console.log(i); //ira retornar o valor do indice
}
console.log("fim do laço"); //determina o fim do laço

/*
o simbolo "%" e chamado de operador de modulo(ou resto da divisão)
ex: (10 % 3) ira retornar 1
abaixo esta o codigo sem comentarios 
*/

for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);

}
console.log ("fim do laço");