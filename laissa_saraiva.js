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
console.log("1 - Imprimindo Números Pares:")
imprimePares(10);

console.log("==========================================")

// ### 2️⃣ Soma dos Números de um Array
// Descrição: Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaArray(array) {
  const valorInicial = 0;
  let soma = array.reduce((valorAcumulado, valorAtual) => {
    return valorAcumulado + valorAtual;
  }, valorInicial)
  console.log(soma)
  return soma
}

console.log("2 - Soma dos Números de um Array:")
somaArray([1, 2, 3, 4, 5])

console.log("==========================================")

// ### 3️⃣ Identificar Número Primo
// Descrição: Crie uma função que receba um número inteiro e retorne `true` se for primo e `false` caso contrário.

function ePrimo(num) {
  let ePrimo;
  let eDivisivelPor = [];

  if (num <= 1) {
    console.log("Informe um número maior do que 1")
  } else {
    for (let i = 1; i <= num; i++) {

      if ((num % i === 0)) {
        eDivisivelPor.push(i)
      }
    }
    if (eDivisivelPor.length > 2) {
      ePrimo = false
    } else {
      ePrimo = true
    }
    console.log(ePrimo)
  }
}

console.log("3 - Identificar Número Primo:")
ePrimo(7), ePrimo(10)

console.log("==========================================")

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

console.log("4 - FizzBuzz:")
fizzBuzz()

console.log("==========================================")

// ### 5️⃣ Contador de Vogais
// Descrição: Crie uma função que receba uma string e retorne a quantidade de vogais nela.

function contaVogais(paragrafo) {
  const regex = /[aeiouáàâãéèêíìîóòôõúùû]/gi
  const testeRegex = regex.test(paragrafo)

  if (testeRegex) {
    const totalVogais = paragrafo.match(regex)
    console.log(totalVogais.length)
  } else {
    console.log("Não foram encontradas vogais no paráfrago informado.")
  }
}

console.log("5 - Contador de Vogais:")
contaVogais("Node.js é incrível") // Obs: A saída da frase é 6.
// contaVogais("Nfrt")

console.log("==========================================")

// ### 6️⃣ Tabuada de um Número
// Descrição: Crie uma função que receba um número e imprima a sua tabuada de 1 a 10.

function tabuada(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num, "x", i, "=", num * i)
  }
}

console.log("6 - Tabuada de um Número:")
tabuada(5)

console.log("==========================================")

// ### 7️⃣ Inverter String
// Descrição: Crie uma função que receba uma string e retorne a mesma string invertida.

function inverteString(string) {
  const palavra = string.split('');
  const inverterPalavra = palavra.reverse()
  const palavraInvertida = inverterPalavra.join('')

  console.log(palavraInvertida)
  return palavraInvertida
}

console.log("7 - Inverter String:")
inverteString("hello")

console.log("==========================================")

// ### 8️⃣ Encontre o Maior Número
// Descrição: Crie uma função que receba um array de números e retorne o maior número presente nele.
// Entrada: `maiorNumero([3, 10, 6, 2])`
// Saída: `10`

function maiorNumero(array) {
  let maiorNum = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNum) {
      maiorNum = array[i]
    }
  }
  console.log(maiorNum)
  return maiorNum
}

console.log("8 - Encontre o Maior Número:")
maiorNumero([3, 10, 6, 2])

console.log("==========================================")

// ### 9️⃣ Palíndromo
// Descrição: Crie uma função que receba uma string e retorne `true` se ela for um palíndromo e `false` caso contrário.

function ePalindromo(frase) {
  let ePalindromo;
  const fraseMinuscula = frase.toLowerCase()
  const fraseInvertida = inverteString(fraseMinuscula)

  if (fraseMinuscula === fraseInvertida) {
    ePalindromo = true
  } else {
    ePalindromo = false
  }

  console.log(ePalindromo)
  return ePalindromo
}

console.log("9 - Palíndromo:")
ePalindromo("Ame a ema")
ePalindromo("Olá mundo")

console.log("==========================================")

// ### 🔟 Média de Notas
// Descrição: Crie uma função que receba um array de notas e retorne se a média é "Aprovado" (≥7) ou "Reprovado" (<7).

function calculaMedia(notas) {
  const quantidadeNotas = notas.length
  const totalNotas = somaArray(notas)
  const media = (totalNotas / quantidadeNotas).toFixed(1)

  if (quantidadeNotas < 1 || quantidadeNotas === undefined) {
    console.log("Insira as notas!")
  } else {
    if (media >= 7) {
      console.log("Aprovado - Média:", media)
    } else {
      console.log("Reprovado- Média:", media)
    }
  }
}

console.log("10 - Média de Notas:")
calculaMedia([8, 7, 6])
calculaMedia([5, 6, 4])
