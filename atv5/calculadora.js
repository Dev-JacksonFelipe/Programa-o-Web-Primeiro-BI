// Importando o módulo readline para ler entrada do usuário
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntando o valor da conta
rl.question('Digite o valor da conta: R$ ', (valorContaInput) => {
  // 1. Definindo o Valor da Conta
  const valorConta = parseFloat(valorContaInput);

  // Perguntando o percentual da gorjeta
  rl.question('Digite o percentual da gorjeta (%): ', (percentualGorjetaInput) => {
    // 1. Definindo o Percentual da Gorjeta
    const percentualGorjeta = parseFloat(percentualGorjetaInput);

    // 2. Calculando a Gorjeta
    const valorGorjeta = valorConta * (percentualGorjeta / 100);

    // 3. Calculando o Valor Total
    const valorTotal = valorConta + valorGorjeta;

    // 4. Exibindo o Resultado
    console.log(`\nValor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, Total a pagar: R$${valorTotal.toFixed(2)}`);

    rl.close();
  });
});
