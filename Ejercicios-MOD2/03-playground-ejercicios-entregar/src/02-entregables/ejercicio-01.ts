console.log("************** DELIVERABLE 01 *********************");


//He utilizado tipos genericos para que así la funcion acepte todo tipo de arrays, ya que desconocemos que tipo de arrays se van a usar.

//arrays:
const ingredientes: Array<string> = ["Garbanzos", "Zanahoria", "Patatas", "Cebolla"];
const quantity: Array<number> = [130, 50, 200, 500, 170];


// HEAD


const head = <T>([first, ...rest]: Array<T>): T => first;
console.log(head(ingredientes));


//TAIL

const tail = <T>([first, ...others]: Array<T>): Array<T> => others;
console.log(tail(quantity));


// INIT

const init = <T>(array: Array<T>): Array<T> => Array.prototype.slice(0, -1);
console.log(init(ingredientes));


//LAST

const last = <T>(array: Array<T>): T | undefined => array.length !== 0 ? array[array.length - 1] : undefined; 
console.log(last(quantity));
