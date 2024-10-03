window.onload = ()=> {
    //Questão 1:
    //Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
    //Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
    //Imprimir(SOMA);
    //Ao final do processamento, qual será o valor da variável SOMA?

    let i = 13;
    let soma = 0;
    let k = 0;

    while (k < i) {
        k = k + 1;
        soma += k;
    }
    console.log (`Resposta da questão 1: ${soma}`);
    console.log ('----------------------------------------------');
    console.log ('----------------------------------------------');

    // Questão 2:
    //Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
    //linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
    //IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

    //Aqui irá calcular a sequência de Fibonacci
    function fibonacci(n) {
        let a = 0;
        let b = 1;

        //Se o número for igual a 0 ou a 1, quer dizer que ele pertence à sequência
        if (n === 0 || n === 1) {
            return true;
        }

        //Faz o cálculo para o próximo número
        let proximoNumero = a + b

        //Continua a sequência até o próximo número ser maior que o número atual
        while (proximoNumero <= n) {
            if (proximoNumero === n) {
                return true;
            }

            //Há a atualização dos valores da sequência
            a = b;
            b = proximoNumero;
            proximoNumero = a + b;
        }

        //Caso chegue nesta linha, o número não pertence mais à sequência
        return false;
    }

    let valorFibonacci = parseInt(prompt("Digite um número para verificar se ele pertence à sequência: "));

    if (fibonacci(valorFibonacci)) {
        console.log(`Resposta da questão 2: o número ${valorFibonacci} pertence à sequência de Fibonacci.`);
    } else{
        console.log(`Resposta da questão 2: o número ${valorFibonacci} não pertence à sequência de Fibonacci.`);
    }
    console.log ('----------------------------------------------');
    console.log ('----------------------------------------------');

    //Questão 3:
    //Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    //• O menor valor de faturamento ocorrido em um dia do mês;
    //• O maior valor de faturamento ocorrido em um dia do mês;
    //• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
    //IMPORTANTE:
    //a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    //b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

    const faturamentoMensal = [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ]

    function calculoFaturamento(faturamento) {
        let menorFaturamento = Number.MAX_VALUE;
        let maiorFaturamento = Number.MIN_VALUE;
        let somaFaturamento = 0;
        let diasFaturamento = 0;

        faturamento.forEach(dia => {
            if (dia.valor > 0) { //Não contabiliza dias com faturamento
                if (dia.valor < menorFaturamento) {
                    menorFaturamento = dia.valor;
                } else if (dia.valor > maiorFaturamento) {
                    maiorFaturamento = dia.valor;
                }
                somaFaturamento += dia.valor;
                diasFaturamento++;
            }
        });

        //Cálculo da média de faturamento
        const mediaFaturamento = somaFaturamento / diasFaturamento;

        //Verifica a quantidade de dias que o faturamento foi superior à média
        let faturamentoSuperior = faturamento.filter(dia => dia.valor > mediaFaturamento).length;

        return {menorFaturamento, maiorFaturamento, mediaFaturamento, faturamentoSuperior};
    }

    //Armazena os resultados
    const resultadoFinal = calculoFaturamento(faturamentoMensal);

    console.log(`Resposta da questão 3: o menor faturamento foi de R$ ${resultadoFinal.menorFaturamento.toFixed(2)}`);
    console.log(`Resposta da questão 3: o maior faturamento foi de R$ ${resultadoFinal.maiorFaturamento.toFixed(2)}`);
    console.log(`Resposta da questão 3: o número de dias com faturamento acima da média é de ${resultadoFinal.faturamentoSuperior} dias`);
    console.log ('----------------------------------------------');
    console.log ('----------------------------------------------');

    //Questão 4:
    //Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
    //• SP – R$67.836,43
    //• RJ – R$36.678,66
    //• MG – R$29.229,88
    //• ES – R$27.165,48
    //• Outros – R$19.849,53
    //Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

    //Faturamento mensal por estado
    const faturamentoEstados = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };

    //Faturamento total
    const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, valor)=>acc + valor, 0);

    function calculoPercentual(faturamento, total) {
        return (faturamento / total) * 100;
    }

    for (let estado in faturamentoEstados) {
        const porcentagem = calculoPercentual(faturamentoEstados[estado], faturamentoTotal);
        console.log(`Resposta da questão 4: o estado ${estado} teve um percentual de representação de ${porcentagem.toFixed(2)}%`);
    }

    console.log ('----------------------------------------------');
    console.log ('----------------------------------------------');

    //Questão 5:
    //Escreva um programa que inverta os caracteres de um string.
    //IMPORTANTE:
    //a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    //b) Evite usar funções prontas, como, por exemplo, reverse;

    let stringOriginal = prompt("Digite uma frase para ser invertida: ")
    let stringInvertida = "";

    for (let j = stringOriginal.length - 1; j >= 0; j--) {
        stringInvertida += stringOriginal[j];
    }

    console.log(`Resposta da questão 5: a string original é ${stringOriginal}.\nA string invertida é ${stringInvertida}`);
}