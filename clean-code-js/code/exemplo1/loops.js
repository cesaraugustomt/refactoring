let students = [
    {name: "Cesar", country: "Brasil"},
    {name: "Braian", country: "EUA"},
    {name: "ChinChong", country: "Japan"},
    {name: "Dostoievski", country: "Russia"},
];


// Exemplo 1
for(let i = 0; i < students.length; i++){
    let students = students[i].year = "2024";
}
// simplificação 
students.forEach(students => students.year = "2024");

/*
Caso eu queira adicionar mais campos:
students.forEach(student => {
    student.year = "2024";
    student.age = 27;
    });
*/ 


// Exemplo 2
let countries = [];
for(let i = 0; i < students.length; i++){
    let student = students[i];
    paises.push(student.country)
}

let countries2 = students.map( s => s.country);

// Uma operação mais complexa
let complexArray = students.map(student => {
    return {...student, date: Date.now()};
});


// Quero extrair somente estudantes que moram fora
let nonBrazilian = students.filter(student => student.country != "Brasil");
console.log(nonBrazilian);