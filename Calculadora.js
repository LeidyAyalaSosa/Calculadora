function suma(a, b) {
  return a + b;
}

const resultado = suma(5, 10);
console.log(resultado);

function resta(a, b = 20) {
  return a - b;
}

const total = resta(8);
console.log(total);

const multiplo = function (a, b) {
  return a * b;
};

const regreso = multiplo(12, 2);
console.log(regreso);

const division = (t, n) => {
  return t / n;
};

const solucion = division(18, 2);
console.log(solucion);

function adicion(a, b, c, d, e, f, g, h, i) {
  return a + b + c + d + e + f + g + h + i;
}

const resolucion = adicion(3, 4, 2, 8, 12, 4, 7, 9, 8);
console.log(resolucion);
