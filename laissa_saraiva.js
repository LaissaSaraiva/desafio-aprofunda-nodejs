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