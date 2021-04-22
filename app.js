const fibonacci = (num) => {
  let n1 = 0;
  let n2 = 1;
  let numeroSiguiente;
  let arr = [];
  if (num <= 0) {
    console.log('Solo numeros mayores a 0');
  } else {
    for (let i = 1; i <= num; i++) {
      arr.push(n1);
      numeroSiguiente = n1 + n2;
      n1 = n2;
      n2 = numeroSiguiente;
    }
    console.log(arr);
  }
};

fibonacci(10);
