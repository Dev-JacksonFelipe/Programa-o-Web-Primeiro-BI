const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntando o valor da conta
rl.question('Digite o valor da conta: R$ ', (valorContaInput) => {
  // 1. Definindo o Valor da Conta
  const valorConta = parseFloat(valorContaInput);

  // porcentagem da gorjeta
  rl.question('Digite o percentual da gorjeta (%): ', (percentualGorjetaInput) => {
    const percentualGorjeta = parseFloat(percentualGorjetaInput);

    // 2. Calculo da gorjeta
    const valorGorjeta = valorConta * (percentualGorjeta / 100);

    // 3. calculo do valor total
    const valorTotal = valorConta + valorGorjeta;

    // 4. monstra o valor total
    console.log(`\nValor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, Total a pagar: R$${valorTotal.toFixed(2)}`);

    rl.close();
  });
});

// Comando para executar o codigo -  node atv5/calculadora.js
