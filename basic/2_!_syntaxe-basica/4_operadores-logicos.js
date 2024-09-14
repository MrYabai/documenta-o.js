/*
operadores logicos : eles são usados para combinar condiçoes 
o "E" do js e feito com "&&": retorna verdadeiro se ambas condiçoes forem verdadeiras

o "OU" do js e feito com "||": retorna verdadeiro se uma ou ambas as condiçoes forem verdadeiras

a "negação logica" do js e feita com "!": inverte o valor booleano*/

let x = 5, y = 10;
console.log(x > 3 && y < 20);  // true (ambas são verdadeiras)
console.log(x < 3 || y > 5);   // true (uma é verdadeira)
console.log(!(x > 3));         // false (negação de true)
