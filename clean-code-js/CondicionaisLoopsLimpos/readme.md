# Condicionais

Podemos resolver condicionais aninhadas com o conceito chamado **usar ifs como guardas da sua função**:

Forma atual, perceba que o objetivo aqui é acessar a função **AccessAdminPanel**:

```
function Login(isAdmin,isLogged, isWifi){
    if(isWifi){
        if(isLogged){
            if(isAdmin){
                AccessAdminPanel();
            }else{
                console.log("Só pode entrar aqui se for admin!")
            }
        }else{
            console.log("Só pode entrar aqui se estiver logado!")  
        }
    }else{
            console.log("Só pode entrar aqui se o modo for WIFI!")
        }
    }
```


Agora nós usamos a **condicional invertida** para impedir que a função execute
dando um **return**. Uma analógia é como se fosse uma triagem.

```
function Login(isAdmin,isLogged, isWifi){

    if(!isWifi){
        console.log("Só pode entrar aqui se o modo for WIFI!");
        return;
    }

    if(!isLogged){
        console.log("Só pode entrar aqui se estiver logado!")  ;
        return;
    }

    if(!isAdmin){
        console.log("Só pode entrar aqui se for admin!");
        return;
    }
    AccessAdminPanel();
}
```


### Outro recurso muito útil para **limpar condicionais**.

Um código utilizando o **if**:
```
let country = "Brasil";
let person = "";

if(country == "Brasil"){
    person = "Brasileiro";
}else{
    person = "Outro";
}
```

Um código mais limpo utilizando **ternário**:
```
let country2 = "Brasil";
let person2 = (country2 == "Brasil") ? "Brasileiro" : "Outro";
```

**observação: O uso do ternário não é indicado quando tiver condicionais aninhadas.**

# Loops Limpos

- Exemplo 01

Eu tenho esse objeto chamado **students**
```
let students = [
    {name: "Cesar", country: "Brasil"},
    {name: "Braian", country: "EUA"},
    {name: "ChinChong", country: "Japan"},
    {name: "Dostoievski", country: "Russia"},
];
```
Quero adicionar um novo campo chamado **year**. Forma tradicional:
```
for(let i = 0; i < students.length; i++){
    let students = students[i].year = "2024";
}
```

**Foma simplificada**:
```
students.forEach(student => {
    student.year = "2024";
    student.age = 27;
    });
```

- Exemplo 2 (faça uma lista com todos os países de todos os estudantes)

**Forma tradicional**:
```
let countries = [];
for(let i = 0; i < students.length; i++){
    let student = students[i];
    paises.push(student.country)
}
```

**Forma simplificada**:
o map cria um novo array passando por todos elementos de students e pegando 
country.
```
let countries = students.map( s => s.country);
```

Um caso mais complexo:
```
let complexArray = students.map(student => {
    return {...student, date: Date.now()};
});
```

Outro maneira utilizando o **filter** essa função é parecida com o map
mas trabalha com uma condição:

```
let nonBrazilian = students.filter(student => student.country != "Brasil");
```

**filter**, **map** e **forEach** são essênciais para limpar laços de repetição.