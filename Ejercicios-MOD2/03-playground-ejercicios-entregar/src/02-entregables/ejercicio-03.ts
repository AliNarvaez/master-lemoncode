console.log("************** DELIVERABLE 03 *********************");

/*
Clone
Implementa una función clone que, a parr de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source :*/



const user = {
    name: "Alicia",
    surname: "Narváez",
    country: "Spain",
    age: 28,
    id: 230,
  };

  const clone = (source) => {
  return {...source}
}

console.log(clone(user))


/*Merge*/

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

const merge = (source, target) => {
  return clone(source), clone(target);
}

console.log(merge (a, b));



