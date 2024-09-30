# Optional chaining 

Ferramenta que ajuda a validar se um campo é válido ou é undefined [Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) ou **Null Check Operaitor**:

O que essa ferramenta faz é, exemplo:

Tenho esse objeto:
```
let aluno = {
    name: "Cesar Augusto",
    year: "2027",
    course: {
        name: "Ciência da Computação",
        duration: 1234
    }
}
```
E quero pegar a propriedade *curso* mas não sei se curso é **undefined** ou não,
então se eu pegar a propriedade dessa forma pode dar um erro:
```
let course = aluno.course.name;
```

para resolver isso posso fazer usar o ponto de interrogação **?**:

```
let course = aluno.course?.name;
```


Toda essa lógica aqui esta inserida dentro do símbolo de **?**:
```
if(aluno.course != undefined){
    course = aluno.course.name
}else {
    course = undefined;
}
```

Um exemplo mais complexo, aqui ele só vai pegar a propriedade do instrutor
se existir um instrutor dentro de um curso.
```
let aluno = {
    name: "Cesar Augusto",
    year: "2027",
    course: {
        name: "Ciência da Computação",
        duration: 1234,
        instructor: {
            name: "Um grande Rei"
        }
    }
}

let course = aluno.course?.instructor?.name;
```