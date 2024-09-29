
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

function CalculateTax(purchase){
    let invoice = {...purchase};

    invoice.value = GetLiquidValue(invoice);
    invoice.value = GetTaxDeductedValue(invoice);
    invoice.value = GetValueDeductedByPlatformTaxes(invoice);
    invoice.value = GetValueDeductedByDiscount(invoice);
    return invoice;
}

function GetLiquidValue({value}){
    const retailerId = "5678";
    const platformId = "4567";

    let  = GetSharedTax(retailerId, platformId);
    return value - sharedTax;
}

function GetTaxDeductedValue({value, document}){
let generalTax = GetTaxValueById(document);
let cityTax = GetTaxaMunicipalById7(document);
let companyTax = GetTaxaDaCompany(document);

return value - generalTax - cityTax - companyTax;
}

function GetValueDeductedByPlatformTaxes({value}){
    const platformFixedTax = 3.50;
    return value - platformFixedTax;
}

function GetValueDeductedByDiscount({value}){
    const discountPercentage = 0.3;
    return value - (value * discountPercentage);
}