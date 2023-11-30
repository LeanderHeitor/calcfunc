
function exibirMenu() {
    console.log("=== CALCULADORA ===");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");
  }
  
  function realizarOperacao(operador, valor1, valor2) {
    switch (operador) {
      case 1:
        return valor1 + valor2;
      case 2:
        return valor1 - valor2;
      case 3:
        return valor1 * valor2;
      case 4:
        if (valor2 !== 0) {
          return valor1 / valor2;
        } else {
          return 'Erro: Divisão por zero!';
        }
      default:
        return 'Opção inválida';
    }
  }
  
  const arrowFunctionOperacao = (operador, valor1, valor2) => realizarOperacao(operador, valor1, valor2);
  
  let continuar = true;
  
  while (continuar) {
    exibirMenu();
  
    const operador = parseInt(prompt('Escolha uma operação (1-5):'));
  
    if (operador >= 1 && operador <= 4) {
      const valor1 = parseFloat(prompt('Digite o primeiro valor:'));
      const valor2 = parseFloat(prompt('Digite o segundo valor:'));
  
      const resultado = arrowFunctionOperacao(operador, valor1, valor2);
      console.log(`Resultado da operação: ${resultado}`);
    } else if (operador === 5) {
      continuar = false;
      console.log('Calculadora encerrada.');
    } else {
      console.log('Opção inválida. Tente novamente.');
    }
  }
  