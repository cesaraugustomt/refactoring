
const {GetTaxValueById, GetCityTaxById, GetCompanyTax, GetSharedTax} = require("./fakeapi.js")

// Sem refatoração
function CalculateTax(nomeDaNota, documentNumber,value,customer,date){

    let nota = {
        notaNome: nomeDaNota,
        notaData: date,
        notaNumber: documentNumber,
        value: 0,
        customer: customer
    }

    let result = GetTaxValueById(documentNumber);
    let result2 = GetCityTaxById(documentNumber);
    let result3 = GetCompanyTax(documentNumber);
    let result4 = GetSharedTax("5678", "4567");

    nota.value = value;

    let result5 = nota.value - result4;

    nota.value = result5 - result - result2 - result3;
    nota.value = nota.value - 3.50;
    nota.value = nota.value - (nota.value * 0.3);
    return nota;
}

// Com refatoração
function CalculateTax(invoiceName, document,value,customer,date){

    const platformFixedTax = 3.50;
    const discountPercentage = 0.3;

    const retailerId = "5678";
    const platformId = "4567";

    let invoice = {
        name: invoiceName,
        date: date,
        number: document,
        value: 0,
        customer: customer
    }

    let generalTax = GetTaxValueById(document);
    let cityTax = GetTaxaMunicipalById7(document);
    let companyTax = GetTaxaDaCompany(document);
    let sharedTax = GetSharedTax(retailerId, platformId);
    let liquidValue = invoice.value - sharedTax;

    
    invoice.value = value;

    invoice.value = liquidValue - generalTax - cityTax - companyTax;
    invoice.value = invoice.value - platformFixedTax;
    invoice.value = invoice.value - (invoice.value * discountPercentage);
    return invoice;
}