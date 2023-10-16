var op1 = 10;
var op2 = 15;
console.log("Mis variables iniciales son ".concat(op1, "  y ").concat(op2));
op1++;
op2 += 4;
console.log("Mis variables finales son ".concat(op1, "  y ").concat(op2));
var resultado = op1 / op2;
console.log("Resultado ".concat(resultado));
console.log("Resultado ".concat(resultado.toPrecision(2)));
