/*
variaveis declaradas dentro de uma funcao tem escopo local, ou seja, so podem ser acessadas dentro dessa funcao
variaveis declaradas fora de qualquer funcao tem escopo global e podem ser acessadas de qualquer local do seu codigo 
ex : 
*/
function exemplo(){
    let local = "local";
    console.log(local); //acessivel dentro da funcao
}
exemplo();
console.log(local); // erro: variavel local nao e acessivel fora da funcao 