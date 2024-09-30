# Especificidades da linguagem JavaScript

## Template literals

**Pare de usar concatenação** no javascript
```
function Teste(){
    let nome = "Cesar";
    let sobrenome = "Augusto";

    let string = "Seu nome é: " + none + "E seu sobrenome é:" + sobrenome +;
}
```

**Use string literals**
```
function Teste(){
    let nome = "Cesar";
    let sobrenome = "Augusto";

    let string = `Seu nome é: ${none}. E seu sobrenome é ${sobrenome}`
}
```

## Spread e Destructuring

Use com mais frequência o **Spread Operaitor**.
```
function Teste(){
    let a = {
        none: "A",
        idade: 18
    }

    let b = {...a}
}
```

observação: O spread também funciona em array:

```
function Teste(array){
 let outroArray = ["A"];
  
  let novoArray = [...outroArray, ...array];
}

```

Ambos são iguais aqui:
```
function Teste(nome, idade){
    let b = {
        nome,
        idade
    }
}
function Teste(nome, idade){
    let b = {
        nome: nome,
        idade: idade
    }
}
```

Use com mais frequência o **Destructuring assignment**.

Aqui estou repetindo bastante código:
```
function Teste(purchase){
    let customer = purchase.customer;
    let product = purchase.product;
    let value = purchase.value;

}

Teste(customer: "Cesar Augusto", product: "Course", value: 48)
```

usando o **destructuring** para extrair os valores:
```
function Teste(purchase){

let {customer, product, value} = purchase;

}

Teste(customer: "Cesar Augusto", product: "Course", value: 48)
```

## Utilizar var se tornou um pessimo padrão em JavaScript

Ao invés de utilizar **var** utilize **let**.
