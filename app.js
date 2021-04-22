const fibonacci = (num) => {
  let n1 = 0;
  let n2 = 1;
  let nu;
  if (num <= 0) {
    console.log('Solo numeros mayores a 0');
  } else {
    for (let i = 1; i <= num; i++) {
      console.log(n1);
      nu = n1 + n2;
      n1 = n2;
      n2 = nu;
    }
  }
};

fibonacci(10);
