# DRY

O conceito DRY (do inglês, "Don't Repeat Yourself") é um princípio fundamental na programação que enfatiza a importância de evitar a repetição de código.

Em outras palavras, o DRY nos diz para garantir que cada pedaço de informação em nosso código seja representado de forma única e precisa.

O objetivo do DRY é tornar o código mais fácil de ler, entender e manter. Quando seguimos este princípio, podemos evitar problemas como códigos confusos e difíceis de manter, além de aumentar a produtividade e a qualidade do código.



Um exemplo de como o DRY pode ser aplicado em um código é quando temos um trecho de código(fora de uma função) que é chamado em várias partes do código.

Em vez de escreve-lo em vários lugares, podemos criar uma única versão desse código, em forma de função e chamá-la sempre que precisarmos. Isso garante que haja apenas uma única fonte de verdade para essa função, o que facilita a manutenção e a leitura do código.

Outra forma de seguir o DRY é evitar a duplicação de dados. Por exemplo, se temos uma lista de produtos em nosso código, é importante garantir que cada produto seja representado de forma única. Caso contrário, corremos o risco de ter informações inconsistentes ou desatualizadas em diferentes partes do código.



Veja aqui um exemplo de um código que não segue o conceito DRY:

```
function calculateTotalPrice3(item1, item2, item3) {
  return item1.price + item2.price + item3.price;
}
 
function calculateTotalPrice4(item1, item2, item3, item4) {
  return item1.price + item2.price + item3.price + item4.price;
}
 
function calculateTotalPrice5(item1, item2, item3, item4, item5) {
  return item1.price + item2.price + item3.price + item4.price + item5.price;
}
 
const product1 = { name: "Product 1", price: 5 };
const product2 = { name: "Product 2", price: 10 };
const product3 = { name: "Product 3", price: 15 };
const product4 = { name: "Product 4", price: 20 };
const product5 = { name: "Product 5", price: 25 };
 
console.log(calculateTotalPrice3(product1, product2, product3));
// Output: 30
 
console.log(calculateTotalPrice4(product1, product2, product3, product4));
// Output: 50
 
console.log(calculateTotalPrice5(product1, product2, product3, product4, product5));
```

Perceba que o Dev que fez esse código criou 3 funções para calcular o preço total de 3,4 e 5 produtos diferentes, porém ele poderia resumir tudo em uma única função, assim:

```
function calculateTotalPrice(products, maxSize) {
    let productsList = [...products];
    productsList.length = maxSize;
    let total = 0;
    productsList.forEach(product => {
        total += product.price;
    });
    return total;
}
  
let products = [
    { name: "Product 1", price: 5 },
    { name: "Product 2", price: 10 },
    { name: "Product 3", price: 15 },
    { name: "Product 4", price: 20 },
    { name: "Product 5", price: 25 }
]
 
  console.log(calculateTotalPrice(products,3));
  console.log(calculateTotalPrice(calculateTotalPrice(products,4));
  console.log(calculateTotalPrice(calculateTotalPrice(products,5));
```

**Em tão lembre-se, evite repetições sempre!**