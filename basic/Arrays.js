// declaración e inicialización de un Array
let nombres = ['Juan', 'Pedro', 'Maria', 'Eduardo'];

let primerNombre = nombres[0];
let ultimoNombre = nombres[nombres.length - 1];

// iterar en un Array
for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];
    console.log(nombre);
}

for (const nombre of nombres) {
    //console.log(nombre);
    if(nombre === 'Pedro'){
        break;
    }
    console.log(nombre);
}

// Itera propiedades de un objeto, no lo usen para iterar elementos de array
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];        
//     }
// }

// agregar elementos al final de un array
nombres.push('Elena');
// sacar del final
let ultimo = nombres.pop();
// sacar del principio
let primer = nombres.shift();
// agregar al principio
nombres.unshift('Anna');
// Buscar la posición
let position = nombres.indexOf('Elena');

// nombres.splice(2,1);
// nombres.slice();

// Ordenar un array
nombres.sort();

// las cadenas en javacript son arrays
let stringLetras = 'abcdeftyt';
for (const s of stringLetras) {
    console.log(s);    
}

let stringNombres = "Juan,Pedro,María,Julian";
let arrayNombres = stringNombres.split(',');

stringNombres = arrayNombres.join(';');

for (const nombre of arrayNombres) {
    console.log(nombre);
}







