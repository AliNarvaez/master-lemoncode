console.log("************** DELIVERABLE 02 *********************");

const colors: Array<string> = ["red", "blue", "yellow"];
const vegetables: Array<string> = ["Garbanzos", "Zanahoria", "Patatas", "Cebolla"];
const measurements: Array<number> = [130, 50, 200, 500, 170];
const numbers: Array<number> = [1, 2, 3, 4, 5];
const objects: Array<string> = ["silla", "mesa", "ordenador", "teclado", "puente"];


const concat = <T>(arrayA: Array<T>, arrayB: Array<T>): Array<T> => {
    return [...arrayA, ...arrayB];
};

console.log(concat(numbers, measurements));
console.log(concat(colors, vegetables));



/*////// OPCIONAL ////*/ console.log("**** OPCIONAL *****"); 

const concatenar = <T>(...variosArrays: Array<Array<T>>): Array<T> => {
    return variosArrays.reduce((acc, cur) => [...acc, ...cur], []);
  };

  console.log(concatenar(colors, vegetables, objects)); 
  

