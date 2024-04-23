import React, { useState } from 'react'; // Importa o React e a função useState de React
import './App.css'; // Importa o arquivo de estilos CSS para o componente App

function App() { // Define a função componente App
  // Define estados para a calculadora
  const [valor_display, set_valor_display] = useState('0'); // Estado para o valor exibido na calculadora
  const [operando, set_operando] = useState(null); // Estado para o primeiro operando
  const [operador, set_operador] = useState(null); // Estado para o operador
  const [aguardando_operando, set_aguardando_operando] = useState(false); // Estado para indicar se estamos aguardando um operando

  // Função para lidar com a entrada de dígitos na calculadora
  const entrada_valor = (digit) => {
    if (aguardando_operando) { // Verifica se estamos aguardando um operando
      set_valor_display(String(digit)); // Define o valor exibido como o dígito inserido
      set_aguardando_operando(false); // Atualiza o estado para indicar que não estamos mais aguardando um operando
    } else {
      // Atualiza o valor exibido adicionando o dígito inserido (se o valor atual não for '0', adiciona ao final)
      set_valor_display(valor_display === '0' ? String(digit) : valor_display + digit);
    }
  };

  // Função para lidar com a entrada do ponto decimal na calculadora
  const entrada_decimal = () => {
    if (!valor_display.includes('.')) { // Verifica se o valor atual já contém um ponto decimal
      set_valor_display(valor_display + '.'); // Adiciona um ponto decimal ao valor exibido
    }
  };

  // Função para limpar o display e os estados da calculadora
  const limpar_display = () => {
    set_valor_display('0'); // Define o valor exibido como '0'
    set_operando(null); // Limpa o primeiro operando
    set_operador(null); // Limpa o operador
    set_aguardando_operando(false); // Define o estado para indicar que não estamos aguardando um operando
  };

  // Função para realizar uma operação matemática na calculadora
  const operacao = (nextOperator) => {
    const entrada = parseFloat(valor_display); // Converte o valor exibido para um número de ponto flutuante

    if (operando === null) { // Verifica se ainda não temos um primeiro operando
      set_operando(entrada); // Define o primeiro operando como o valor exibido
    } else if (operador) { // Verifica se já temos um operador definido
      const result = calculo(operando, entrada, operador); // Calcula o resultado da operação
      set_valor_display(String(result)); // Define o valor exibido como o resultado da operação
      set_operando(result); // Define o primeiro operando como o resultado da operação
    }

    set_aguardando_operando(true); // Define o estado para indicar que estamos aguardando um operando
    set_operador(nextOperator); // Define o próximo operador a ser usado
  };

  // Função para calcular o resultado de uma operação matemática
  const calculo = (valor1, valor2, operador) => {
    // Realiza a operação com base no operador especificado
    switch (operador) {
      case '+':
        return valor1 + valor2; // Soma
      case '-':
        return valor1 - valor2; // Subtração
      case '×':
        return valor1 * valor2; // Multiplicação
      case '÷':
        return valor1 / valor2; // Divisão
      default:
        return valor2; // Retorna o segundo operando se nenhum operador válido for especificado
    }
  };

  // Retorna a interface da calculadora
  return (
    <div className="calculatora">
      <div className="tela">{valor_display}</div> {/* Exibe o valor atual na calculadora */}
      <div className="botoes">
        {/* Botões para os dígitos de 0 a 9 */}
        <button onClick={() => entrada_valor(7)}>7</button>
        <button onClick={() => entrada_valor(8)}>8</button>
        <button onClick={() => entrada_valor(9)}>9</button>
        {/* Botão para a operação de divisão */}
        <button onClick={() => operacao('÷')}>÷</button>
        <button onClick={() => entrada_valor(4)}>4</button>
        <button onClick={() => entrada_valor(5)}>5</button>
        <button onClick={() => entrada_valor(6)}>6</button>
        {/* Botão para a operação de multiplicação */}
        <button onClick={() => operacao('×')}>×</button>
        <button onClick={() => entrada_valor(1)}>1</button>
        <button onClick={() => entrada_valor(2)}>2</button>
        <button onClick={() => entrada_valor(3)}>3</button>
        {/* Botão para a operação de subtração */}
        <button onClick={() => operacao('-')}>-</button>
        {/* Botão para o dígito 0 */}
        <button onClick={() => entrada_valor(0)}>0</button>
        {/* Botão para o ponto decimal */}
        <button onClick={() => entrada_decimal()}>.</button>
        {/* Botão para a operação de adição */}
        <button onClick={() => operacao('+')}>+</button>
        {/* Botão para limpar o display */}
        <button onClick={() => limpar_display()}>C</button>
        {/* Botão para apagar o último dígito */}
        <button onClick={() => set_valor_display(valor_display.slice(0, -1))}>←</button>
        {/* Botão para inverter o sinal do número */}
        <button onClick={() => set_valor_display(String(-parseFloat(valor_display)))}>±</button>
        {/* Botão para adicionar ou remover o sinal negativo */}
        <button onClick={() => {
          if (!valor_display.includes('-')) set_valor_display('-' + valor_display);
        }}>+/-</button>
        {/* Botão para calcular o resultado */}
        <button onClick={() => {
          const resultado = calculo(operando, parseFloat(valor_display), operador); // Calcula o resultado
          set_valor_display(String(resultado)); // Define o valor exibido como o resultado
          set_operando(null); // Limpa o primeiro operando
          set_operador(null); // Limpa o operador
          set_aguardando_operando(false); // Define o estado para indicar que não estamos mais aguardando um operando
        }}>=</button>
      </div>
    </div>
  );
}

export default App; // Exporta o componente App como o componente padrão deste arquivo
