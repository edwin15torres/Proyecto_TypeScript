
let op1: number=10;
let op2: number=15;

console.log(`Mis variables iniciales son ${op1}  y ${op2}`);

op1++;
op2+=4;

console.log(`Mis variables finales son ${op1}  y ${op2}`);

let resultado: number = op1/op2;
console.log(`Resultado ${resultado}`);
console.log(`Resultado ${resultado.toPrecision(2)}`);