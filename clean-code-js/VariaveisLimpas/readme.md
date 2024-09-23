# Váriavel precisam de contexto!

Quando você está escrevendo um código ele precisa ser o mais **expressivo** possível para a pessoa que for ler ele no futuro consiga entender ele muito facilmente para ter produtividade no futuro.

Função que calcularia a taxa da venda de um produto feita em um ecomerce.
```

const {GetTaxValueById, GetTaxaMunicipalById, GetTaxaDaCompany, GetSharedTax} = require("./fakeapi.js")

function CalculateTax(nomeDaNota, documentNumber,value,customer,date){

    let nota = {
        notaNome: nomeDaNota,
        notaData: date,
        notaNumber: documentNumber,
        value: 0,
        customer: customer
    }

    let result = GetTaxValueById(documentNumber);
    let result2 = GetTaxaMunicipalById7(documentNumber);
    let result3 = GetTaxaDaCompany(documentNumber);
    let result4 = GetSharedTax("5678", "4567");

    nota.value = value;

    let result5 = nota.value - result4;
    
    nota.value = result5 - result - result2 - result3;
    nota.value =  nota.value - 3.50;
    nota.value =  nota.value - ( nota.value * 0.3);
    return nota;
}
```

### O que é result ?

```
    let result = GetTaxValueById(documentNumber);
    let result2 = GetTaxaMunicipalById7(documentNumber);
    let result3 = GetTaxaDaCompany(documentNumber);
    let result4 = GetSharedTax("5678", "4567");
    let result5 = nota.value - result4;
```

é preciso aprender a dar contexto para as coisas.
```
    let generalTax = GetTaxValueById(documentNumber);
    let cityTax = GetTaxaMunicipalById7(documentNumber);
    let companyTax = GetTaxaDaCompany(documentNumber);
    let sharedTax = GetSresult4haredTax("5678", "4567");
    let liquidValue = nota.value - result4;
```

# FUJA das abreviações

Abreviar o nome da váriavel é a mesma coisa que deixar a váriavel sem contexto.
Prefira **nomes longos** ao invés de **nomes abreviados**.

O princípio fundamental do clean code é *expressividade*. O seu código tem que se alto explicar.

# Redundancia: Um Problema Chato

Exemplo de redundancia:
```
    let nota = {
        notaNome: nomeDaNota,
        notaData: date,
        notaNumber: documentNumber,
        value: 0,
        customer: customer
    }
```
Se os campos já estão dentro da nota porque colocar a palavra nota na frente de cada um ?

```
class Student{
    studentName,
    studentId,
    studentClass,
}
```

Se já está dentro do contexto não é preciso repetir o nome:

```
class Student{
    Name,
    Id,
    Class,
}
```

mesma coisa aqui:

```
let nota = {
    Nome: nomeDaNota,
    Data: date,
    Number: documentNumber,
    value: 0,
    customer: customer
}
```

Outra coisa muito importante é **não colocar o tipo da váriavel no nome** da váriavel um exemplo:

```
let nota = {
    Number: documentNumber, 
}
```

renemeie para:

```
let nota = {
    Number: document, 
}
```

# O Problema da Mistura de Idiomas

- Nunca misture dois idiomas salvo a excessão onde a palavra só existe em português. No geral não misture os dois idiomas.

- O mundo inteiro escreve código em inglês esse é o padrão do mundo.

Mude isso:
```
let nota = {
    Nome: nomeDaNota,
    Data: date,
    Number: document,
    value: 0,
    customer: customer
}
```
Para isso:
```
let invoice = {
    Name: nomeDaNota,
    Date: date,
    Number: document,
    value: 0,
    customer: customer
}
```

Mude isso:

```
GetTaxaMunicipalById: (id) => {

},
GetTaxaDaCompany: (id) => {

},
```

Para isso:

```
GetCityTaxById: (id) => {

},
GetCompanyTax: (id) => {

},
```

**Use um padrão uniforme em todo o seu projeto**, aqui temos letras minusculas e maiusculas juntas e isso é esquisito.

```
    let invoice = {
        Name: invoiceName,
        Date: date,
        Number: document,
        value: 0,
        customer: customer
    }
```

Nome de váriavel dentro de objeto é sempre com letra minuscula:

```
    let invoice = {
        name: invoiceName,
        date: date,
        number: document,
        value: 0,
        customer: customer
    }
```

# Fuja dos números mágicos

Núemros mágicos são números que aparecem misteriosamente no seu código e são 
só números jogados no meio do seu código.

Exemplo, o que é 3.50 ? ou o que é esse 0.3 ?
```
invoice.value = invoice.value - 3.50;
invoice.value = invoice.value - (invoice.value * 0.3);
```

As vezes um número mágico também pode ser uma string, o que são esses números?

```
let sharedTax = GetSharedTax("5678", "4567");
```

Crie uma váriavel para descrever o que representa aquele número para resolver isso:
```
const platformFixedTax = 3.50;
const discountPercentage = 0.3;

invoice.value = invoice.value - platformFixedTax;
invoice.value = invoice.value - (invoice.value * discountPercentage);

```


```
const retailerId = "5678";
const platformId = "4567";

let sharedTax = GetSharedTax(retailerId, platformId);
```


- Primeiro grande problema: váriaveis sem contexto;
- Segundo grande problema: uso de número mágicos;