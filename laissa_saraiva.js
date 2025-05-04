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

imprimePares(10);
