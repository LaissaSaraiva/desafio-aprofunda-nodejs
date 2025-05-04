// ### 1️⃣ Imprimindo Números Pares
// Descrição: Crie uma função que receba um número inteiro `N` e imprima todos os números pares de `0` até `N`.

function imprimePares(num) {
  for (let i = 0; i <= num; i++) {
    const numeroPar = (i % 2 === 0)
    if (numeroPar) {
      console.log(i)
    }
  }
}
console.log("1️⃣- Imprimindo Números Pares:")
imprimePares(10);

// ### 2️⃣ Soma dos Números de um Array
// Descrição: Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaArray(array) {
  const valorInicial = 0;
  let soma = array.reduce((valorAcumulado, valorAtual) => {
    return valorAcumulado + valorAtual;
  }, valorInicial)
  console.log(soma)
}

console.log("2️⃣- Soma dos Números de um Array:")
somaArray([1, 2, 3, 4, 5])

// ### 3️⃣ Identificar Número Primo
// Descrição: Crie uma função que receba um número inteiro e retorne `true` se for primo e `false` caso contrário.

function ePrimo(num) {
  let ePrimo;
  let eDivisivelPor = [];

  if (num <= 1) {
    console.log("Informe um número maior do que 1")
  } else {
    for (let i = 1; i <= num; i++) {
      // console.log(num, "/", i, "sobra: ", num % i)
      if ((num % i === 0)) {
        // console.log(num, "é divisivel por:", i)
        eDivisivelPor.push(i)
      }
    }
    // console.log(num, "ePrimo ~ eDivisivelPor:", eDivisivelPor)
    if (eDivisivelPor.length > 2) {
      ePrimo = false
    } else {
      ePrimo = true
    }
    console.log(ePrimo)
  }
}

console.log("3️⃣- Identificar Número Primo:")
ePrimo(7), ePrimo(10)
