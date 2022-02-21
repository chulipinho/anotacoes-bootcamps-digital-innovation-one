function comparaNumeros(a, b) {
    const primeiraFrase = retornaPrimeiraFrase(a, b);
    const segundaFrase = retornaSegundaFrase(a, b);

    return `${primeiraFrase} ${segundaFrase}`;
}

function retornaPrimeiraFrase(a, b) {
    let saoIguais = '';

    if(a != b) {
        saoIguais = 'não ';
    }
    return `Os números ${a} e ${b} ${saoIguais}são iguais.`;
}

function retornaSegundaFrase(a, b) {
    const soma = a + b;
    
    let maiorQue20 = soma > 20 ? 'maior' : 'menor';
    let maiorQue10 = soma > 10 ? 'maior' : 'menor';

    return `Sua soma é ${soma}, que é ${maiorQue10} que 10 e ${maiorQue20} que 20`;
}

console.log(comparaNumeros(12, 12));