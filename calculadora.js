let resultado = document.getElementById("resultado");
let resultadomemoria = "";
let botoesnumeros = document.querySelectorAll(".numero");//criando um vetor botoesnumeros que armazena todos os valores da classe numero
let mais = document.getElementById("+");
let menos = document.getElementById("-");
let igual = document.getElementById("=");
let limpar = document.getElementById("C");
let valor1, total = 0, operacao, valores = [];
let i = 0;
//criando todas as variaveis necessarias para o codigo


botoesnumeros.forEach(function(botao){//basicamente aqui diz, para cada elemento do vetor botoesnumeros atribua o nome botao a ele, isso evita fazer uma função para cada numero individualmente
    botao.addEventListener("click", function(){//aqui cria uma função para a cada click no botao, ou seja, qualquer numero, exibir na tela esse valor e armazenar na memoria
    
    resultado.textContent = resultado.textContent + botao.textContent;
    resultadomemoria = resultadomemoria + botao.textContent;
    });
});

mais.addEventListener("click", function(){
    operacao = '+';
    resultado.textContent = resultado.textContent + "+";
    valores[i] = Number(resultadomemoria)
    resultadomemoria = "";
    i++;
})

menos.addEventListener("click", function(){
    operacao = '-';
    resultado.textContent = resultado.textContent + "-";
    valores[i] = Number(resultadomemoria)
    resultadomemoria = "";
    i++;
})

igual.addEventListener("click", function(){
    
    valores[i] = Number(resultadomemoria);

    if(operacao == '+'){
    for(let j = 0;j<2;j++){
        total = total + valores[j];
    }
}else if(operacao == '-'){
    let j = 0;
        total = valores[j] - valores[j+1];
        }

    console.log(total);
    resultado.textContent = total;
    resultadomemoria = total;
    i = 0;
    valores[i] = total;
    total = 0;
    
})

limpar.addEventListener("click", function(){
    resultado.textContent = "";
    resultadomemoria = "";
    total = 0;
    valores = [];
    i = 0;

})
