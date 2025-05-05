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

// ### 4️⃣ FizzBuzz
// Descrição: Crie uma função que imprima números de 1 a 50, substituindo múltiplos de 3 por "Fizz", múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}

console.log("4️⃣- FizzBuzz:")
fizzBuzz()

// ### 5️⃣ Contador de Vogais
// Descrição: Crie uma função que receba uma string e retorne a quantidade de vogais nela.

function contaVogais(paragrafo) {
  const regex = /[aeiouáàâãéèêíìîóòôõúùû]/gi
  const testeRegex = regex.test(paragrafo)
  // console.log("contaVogais ~ teste:", testeRegex)

  if (testeRegex) {
    const totalVogais = paragrafo.match(regex)
    // console.log(totalVogais)
    console.log(totalVogais.length)
  } else {
    console.log("Não foram encontradas vogais no paráfrago informado.")
  }
}

console.log("5️⃣- Contador de Vogais:")
contaVogais("Node.js é incrível") // Obs: A saída da frase é 6.
// contaVogais("Nfrt")


// ### 6️⃣ Tabuada de um Número
// Descrição: Crie uma função que receba um número e imprima a sua tabuada de 1 a 10.

function tabuada(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num, "x", i, "=", num * i)
  }
}

console.log("6️⃣- Tabuada de um Número:")
tabuada(5)