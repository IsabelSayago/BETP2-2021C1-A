/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];


const newPropertyPrice = beers.map(beer => {
  beer.name === 'Purple Iris' ? beer.price = 320 : beer.abv < 5.0 ? beer.price = 300 : beer.price = 350
  return beer
})


newPropertyPrice.forEach(beer =>{
  beer.file_name =  beer.label.split('/').pop()
}) 



const orderByProperty = function(arr, property) {
  return arr.sort((a,b) => a[property] === b[property] ? 0 : a[property] < b[property] ? -1 : 1 )

}


// console.log(orderByProperty(newPropertyPrice,'type'))


/* 

Otra función para agregar property File Name dado el nombre de otra propiedad.

const newPropertyFileName = (arr,label) =>{
  let newArray = arr.map(object => {
  object['file_name'] = object[label].split('/').pop()
  return object
})
return newArray;
}

const finalBeers = newPropertyFileName(newPropertyPrice, 'label')
console.log(orderByProperty(finalBeers,'type'))

*/


/* let firstArray = [1,2,3,4,5]

let secondArray = firstArray;

console.log(firstArray)
console.log(secondArray)

secondArray[0] = 7;
console.log(firstArray)
console.log(secondArray)

let combineArray = [...firstArray,...secondArray] */
// console.log(combineArray)


/* 

let obj = {great: 'No', awesome: 'Yes'}

let objInd = {...obj, cool: 'yaiks'}

// console.log(objInd)

let numeros = '123'

let convertidos = -numeros;

console.log(convertidos, numeros) */

let boolTrue = true;
let boolFalse = false;

console.log(boolTrue+boolFalse);
console.log(boolFalse+boolTrue);
console.log(+boolFalse+boolTrue);
console.log(+boolTrue+boolFalse);
