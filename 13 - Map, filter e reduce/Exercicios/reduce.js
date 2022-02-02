var array = [2, 13, 44 ,52, 54, 230, 5];

const somaArray = array.reduce((total, valor) => total + valor);

const calculaSaldo = (precos, saldo) => {
    return array.reduce((total, valor) => total - valor, saldo);
}

console.log(`1: ${somaArray}\n2: ${calculaSaldo(array, 1400)}`);