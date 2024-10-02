/*
.slice()
esse metodo retorna uma copia superficial de uma parte do array, sem modifica-lo. ele recebe 2 parametros o indice de inicio e o de fim, se o indice de fim não for especificado, ele ira ate o final do array.
ex : */

let numeros = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"];
let selecionados = numeros.slice(1, 5)
console.log(selecionados) // [ 'dois', 'tres', 'quatro', 'cinco' ]
//como pode ver não ouve alteração na parte selecionada

