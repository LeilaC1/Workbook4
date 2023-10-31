"use strict";

//supplierCode:productNumber-size

let partCode1 =  "XYZ:1234-L";
let parsedCode = parsePartCode(partCode1);





function parsePartCode(partCode){
// return
return {
    supplier: getSupplier(partCode),
    productNum: getProductNumber(partCode),
    size: getSize(partCode)
};

}

function getSupplier (partCode){
    let posOfColon = partCode.indexOf(':');
    return partCode.slice(0, posOfColon);
}

function getProductNumber (partCode){
    let startPosition = partCode.indexOf(':') + 1;
    let endPosition = partCode.indexOf('-');
    return partCode.slice(startPosition, endPosition);
    
}
function getSize(partCode) {
    let posOfDash =partCode.indexOf('-') + 1;
    return partCode.slice(posOfDash);
}

    
    console.log(`Supplier is ${parsedCode.supplier} Number is ${parsedCode.productNum} Size is ${parsedCode.size}`);