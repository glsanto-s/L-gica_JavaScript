document.querySelector("#btn_lista01").addEventListener("click", () => {
    document.querySelector(".lista1").style.display = "block";
    document.querySelector(".lista2").style.display = "none";
    document.querySelector(".lista3").style.display = "none";
    document.querySelector(".listaF").style.display = "none";
    document.querySelector(".listaM").style.display = "none";
});
document.querySelector("#btn_lista02").addEventListener("click", () => {
    document.querySelector(".lista1").style.display = "none";
    document.querySelector(".lista2").style.display = "block";
    document.querySelector(".lista3").style.display = "none";
    document.querySelector(".listaF").style.display = "none";
    document.querySelector(".listaM").style.display = "none";
});
document.querySelector("#btn_lista03").addEventListener("click", () => {
    document.querySelector(".lista1").style.display = "none";
    document.querySelector(".lista2").style.display = "none";
    document.querySelector(".lista3").style.display = "block";
    document.querySelector(".listaF").style.display = "none";
    document.querySelector(".listaM").style.display = "none";
});

function exercicio(mostrar) {
    var ex = document.querySelector(mostrar);

    if (ex.style.display === "none") {
        ex.style.display = "block";
    } else {
        ex.style.display = "none";
    }

}

var result;

//#region Lista 01
function l1_ex01() {
    var Num = document.getElementById("ex01_l1").value;

    result = parseInt(Num) + 1;

    document.getElementById("ex01_l1_result").innerHTML = "Número Sucessor: " + result;
}

function l1_ex02() {
    var Num = document.getElementById("ex02_l1").value;

    result = parseInt(Num) - 1;

    document.getElementById("ex02_l1_result").innerHTML = "Número Antecessor: " + result;
}

function l1_ex03() {
    var N1 = document.getElementById("ex03_n1_l1").value;
    var N2 = document.getElementById("ex03_n2_l1").value;

    result = parseInt(N1) + parseInt(N2);

    document.getElementById("ex03_l1_result").innerHTML = "Soma dos Números: " + result;
}

function l1_ex04() {
    var N1 = document.getElementById("ex04_n1_l1").value;
    var N2 = document.getElementById("ex04_n2_l1").value;

    result = parseInt(N1) - parseInt(N2);

    document.getElementById("ex04_l1_result").innerHTML = "Subtração dos Números: " + result;
}

function l1_ex05() {
    var N1 = document.getElementById("ex05_n1_l1").value;
    var N2 = document.getElementById("ex05_n2_l1").value;

    result = parseInt(N1) * parseInt(N2);

    document.getElementById("ex05_l1_result").innerHTML = "Multiplicação dos Números: " + result;
}

function l1_ex06() {
    var N1 = document.getElementById("ex06_n1_l1").value;
    var N2 = document.getElementById("ex06_n2_l1").value;

    result = parseFloat(N1) / parseFloat(N2);

    document.getElementById("ex06_l1_result").innerHTML = "Divisão dos Números: " + result;
}

function l1_ex07() {
    var N1 = document.getElementById("ex07_n1_l1").value;
    var N2 = document.getElementById("ex07_n2_l1").value;

    result = parseFloat(N1) * parseFloat(N2);

    document.getElementById("ex07_l1_result").innerHTML = "A área do retângulo é: " + result;
}

function l1_ex08() {
    var N1 = document.getElementById("ex08_n1_l1").value;
    var N2 = document.getElementById("ex08_n2_l1").value;

    result = parseFloat(N1) * parseFloat(N2) / 2;

    document.getElementById("ex08_l1_result").innerHTML = "A área do triângulo é: " + result;
}

function l1_ex09() {
    var N1 = document.getElementById("ex09_n1_l1").value;

    result = Math.pow(parseInt(N1), 2);

    document.getElementById("ex09_l1_result").innerHTML = "A área do quadrado é: " + result;
}

function l1_ex10() {
    var N1 = document.getElementById("ex10_n1_l1").value;
    var N2 = document.getElementById("ex10_n2_l1").value;

    result = parseFloat(N1) * parseFloat(N2) / 2;

    document.getElementById("ex10_l1_result").innerHTML = "A área do losango é: " + result;
}

function l1_ex11() {
    var N1 = document.getElementById("ex11_n1_l1").value;
    var N2 = document.getElementById("ex11_n2_l1").value;
    var N3 = document.getElementById("ex11_n3_l1").value;

    result = ((parseFloat(N1) + parseFloat(N2)) * parseFloat(N3)) / 2;

    document.getElementById("ex11_l1_result").innerHTML = "A área do losango é: " + result;
}

function l1_ex12() {
    var N1 = document.getElementById("ex12_n1_l1").value;

    result = Math.pow(parseInt(N1), 2) * 3.14;

    document.getElementById("ex12_l1_result").innerHTML = "A área do círculo é: " + result;
}
//#endregion

//#region Lista 02
function l2_ex01() {
    var anos = document.getElementById("ex01_n1_l2").value;
    var meses = document.getElementById("ex01_n2_l2").value;
    var dias = document.getElementById("ex01_n3_l2").value;

    result = (parseInt(anos) * 365) + (parseInt(meses) * 30) + parseInt(dias);

    document.getElementById("ex01_l2_result").innerHTML = "Você possui: " + result + " dias!";
}

function l2_ex02() {
    var vtValidos = document.getElementById("ex02_n1_l2").value;
    var vtBrancos = document.getElementById("ex02_n2_l2").value;
    var vtNulos = document.getElementById("ex02_n3_l2").value;

    result = parseInt(vtValidos) + parseInt(vtBrancos) + parseInt(vtNulos);
    var porcV = (parseInt(vtValidos) * 100) / result;
    var porcB = (parseInt(vtBrancos) * 100) / result;
    var porcN = (parseInt(vtNulos) * 100) / result;

    document.getElementById("ex02_l2_result").innerHTML = "Total de votos: " + result + "<br> Percentual votos válidos: " + porcV + "<br>  Percentual votos brancos: " + porcB + "<br>  Percentual votos nulos: " + porcN;
}

function l2_ex03() {
    var salario = document.getElementById("ex03_n1_l2").value;
    var reajuste = document.getElementById("ex03_n2_l2").value;

    var total_reajuste = (parseFloat(salario) * parseFloat(reajuste)) / 100
    result = parseFloat(salario) + total_reajuste

    document.getElementById("ex03_l2_result").innerHTML = "Novo salário: R$" + result + "<br> Reajuste de: R$" + total_reajuste;
}

function l2_ex04() {
    var custo = document.getElementById("ex04_n1_l2").value;

    var porcD = (parseFloat(custo) * 28) / 100;
    var porcI = (parseFloat(custo) * 45) / 100;
    result = parseFloat(custo) + porcD + porcI;

    document.getElementById("ex04_l2_result").innerHTML = "O custo final do consumidor será de: R$" + result;

}

function l2_ex05() {
    var celsius = document.getElementById("ex05_n1_l2").value;

    result = (9 * parseFloat(celsius) + 160) / 5

    document.getElementById("ex05_l2_result").innerHTML = "Temperatura em Fahrenheit: " + result;

}

function l2_ex06() {
    var fahrenheit = document.getElementById("ex06_n1_l2").value;

    result = (parseFloat(fahrenheit) - 32) * (5 / 9);

    document.getElementById("ex06_l2_result").innerHTML = "Temperatura em Celsius: " + result;

}

function l2_ex07() {
    var raio = parseFloat(document.getElementById("ex07_n1_l2").value);
    var altura = parseFloat(document.getElementById("ex07_n2_l2").value);

    result = 3.14 * Math.pow(raio, 2) * altura

    document.getElementById("ex07_l2_result").innerHTML = "O volume da lata de óleo é de: " + result;

}

function l2_ex08() {
    var hora = parseInt(document.getElementById("ex08_n1_l2").value);
    var velocidade = parseInt(document.getElementById("ex08_n2_l2").value);

    var distancia = hora * velocidade;
    result = distancia / 12

    document.getElementById("ex08_l2_result").innerHTML = "Sua distância foi: " + distancia + "m <br> O consumo de seu combustível foi " + result + " litros";

}

function l2_ex09() {
    var valor = parseFloat(document.getElementById("ex09_n1_l2").value);
    var taxa = parseFloat(document.getElementById("ex09_n2_l2").value);
    var tempo = parseInt(document.getElementById("ex09_n3_l2").value);

    result = valor + (valor * taxa / 100) * tempo;

    document.getElementById("ex09_l2_result").innerHTML = "Suas prestações serão de: R$" + result;

}

function l2_ex10() {
    var valorA = document.getElementById("ex10_n1_l2").value;
    var valorB = document.getElementById("ex10_n2_l2").value;

    var valorC = valorA;
    valorA = valorB;
    valorB = valorC;

    document.getElementById("ex10_l2_result").innerHTML = "Efetuando a troca <br> 1º Valor: " + valorA + "<br> 2º Valor: " + valorB;

}
//#endregion

//#region Lista 03
function l3_ex01() {
    var vA = parseFloat(document.getElementById("ex01_n1_l3").value);
    var vB = parseFloat(document.getElementById("ex01_n2_l3").value);
    var vC = parseFloat(document.getElementById("ex01_n3_l3").value);
    var vD = parseFloat(document.getElementById("ex01_n4_l3").value);

    // adição
    var sAB = vA + vB;
    var sAC = vA + vC;
    var sAD = vA + vD;
    var sBC = vB + vC;
    var sBD = vB + vD;
    var sCD = vC + vD;

    // multiplicação
    var xAB = vA * vB;
    var xAC = vA * vC;
    var xAD = vA * vD;
    var xBC = vB * vC;
    var xBD = vB * vD;
    var xCD = vC * vD;

    document.getElementById("ex01_l3_result").innerHTML = "Soma: " + sAB + " - " + sAC + " - " + sAD + " - " + sBC + " - " + sBD + " - " + sCD + "<br> Multiplicação " + xAB + " - " + xAC + " - " + xAD + " - " + xBC + " - " + xBD + " - " + xCD;

}

function l3_ex02() {
    var comprimento = parseFloat(document.getElementById("ex02_n1_l3").value);
    var largura = parseFloat(document.getElementById("ex02_n2_l3").value);
    var altura = parseFloat(document.getElementById("ex02_n3_l3").value);

    result = comprimento * largura * altura;

    document.getElementById("ex02_l3_result").innerHTML = "O volume da caixa é: " + result;

}

function l3_ex03() {
    var N1 = parseFloat(document.getElementById("ex03_n1_l3").value);
    var N2 = parseFloat(document.getElementById("ex03_n2_l3").value);

    result = Math.pow((N1 - N2), 2);

    document.getElementById("ex03_l3_result").innerHTML = "O quadrado da diferença é: " + result;

}

function l3_ex04() {
    var N1 = parseFloat(document.getElementById("ex04_n1_l3").value);
    var N2 = parseFloat(document.getElementById("ex04_n2_l3").value);

    result = N2 / N1;

    document.getElementById("ex04_l3_result").innerHTML = "O valor convertido em Dólar é: $" + result;

}

function l3_ex05() {
    var N1 = parseFloat(document.getElementById("ex05_n1_l3").value);
    var N2 = parseFloat(document.getElementById("ex05_n2_l3").value);

    result = N2 * N1;

    document.getElementById("ex05_l3_result").innerHTML = "O valor convertido em Dólar é: $" + result;

}

function l3_ex06() {
    var N1 = parseFloat(document.getElementById("ex06_n1_l3").value);
    var N2 = parseFloat(document.getElementById("ex06_n2_l3").value);
    var N3 = parseFloat(document.getElementById("ex06_n3_l3").value);

    result = Math.pow(N1, 2) + Math.pow(N2, 2) + Math.pow(N3, 2);

    document.getElementById("ex06_l3_result").innerHTML = "A soma dos quadrados dos três valores é: " + result;

}

function l3_ex07() {
    var N1 = parseFloat(document.getElementById("ex07_n1_l3").value);
    var N2 = parseFloat(document.getElementById("ex07_n2_l3").value);
    var N3 = parseFloat(document.getElementById("ex07_n3_l3").value);

    result = Math.pow((N1 + N2 + N3), 2);

    document.getElementById("ex07_l3_result").innerHTML = "O quadrado da soma dos três valores é: " + result;

}

function l3_ex08() {
    var N1 = parseFloat(document.getElementById("ex08_n1_l3").value);
    var N2 = parseFloat(document.getElementById("ex08_n2_l3").value);
    var N3 = parseFloat(document.getElementById("ex08_n3_l3").value);
    var N4 = parseFloat(document.getElementById("ex08_n4_l3").value);

    var produto = N1 * N3;
    var soma = N2 + N4;

    document.getElementById("ex08_l3_result").innerHTML = "Resultado do 1º valor com o 3º valor: " + produto + "<br> Resultado do 2º valor com o 4º valor: " + soma;

}

function l3_ex09() {
    var salario = parseFloat(document.getElementById("ex09_n1_l3").value);
    var reajuste = parseFloat(document.getElementById("ex09_n2_l3").value);

    result = (salario * (reajuste / 100)) + salario

    document.getElementById("ex09_l3_result").innerHTML = "Seu novo salário será: R$" + result;

}

function l3_ex10() {
    var cA = parseFloat(document.getElementById("ex10_n1_l3").value);
    var cB = parseFloat(document.getElementById("ex10_n2_l3").value);
    var cC = parseFloat(document.getElementById("ex10_n3_l3").value);
    var vB = parseFloat(document.getElementById("ex10_n4_l3").value);
    var vN = parseFloat(document.getElementById("ex10_n5_l3").value);

    var validos = cA+cB+cC;
    result = validos+vB+vN;

    // Percentual
    cA = cA*100/result 
    cB = cB*100/result 
    cC = cC*100/result 

    validos = validos*100/result
    vB = vB*100/result
    vN = vN*100/result

    document.getElementById("ex10_l3_result").innerHTML = "Percentual candidato A: " + cA.toFixed(2) + "% | Percentual Candidato B: "+ cB.toFixed(2) + "% | Percentual Candidato C: "+ cC.toFixed(2) + "%<br> Percentual votos Válidos: "+ validos.toFixed(2) + "% | Percentual votos Brancos: "+ vB.toFixed(2) + "% | Percentual votos Nulos: "+ vN.toFixed(2) +"%";
}
//#endregion

