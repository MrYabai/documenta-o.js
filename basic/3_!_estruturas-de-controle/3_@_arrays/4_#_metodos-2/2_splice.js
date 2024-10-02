/*
 o metodo .splice() serve para adicionar, remover ou substituir elementos do array. ele modifica o array no lugar, ou seja, altera o array original
ex : 
*/

let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`num completo ${num}`);
let removidos = num.splice(2, 2);

console.log(`numeros removidos do num: \n${removidos} \n \n como o array esta agora \n ${num}`);

// pode-se ver que os numeros 3 e 4 forma removidos e não participam mais do array
//lembre-se o indice de um array começa em 0 
// então o 1 == i[0]
//o numero um tem indice igual a zero

/*
o "\n" serve para fazer a quebra de linha dentro de uma string
mas lembre-se tanto ela quanto qualquer comando dentro de uma string so funciona se a string for aberta com crase
`aqui dentro ira funcionar`
 */