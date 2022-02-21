var array = [1, 2, 3, 4, 5];

const bola = {
    valor: 3,
}

function mapComThis(arr, thisArg) {
    
    return arr.map(function (item) {return item * this.valor;}, thisArg);
    // arrow functions não aceitam 'this'

}

console.log(array.map((item) => item * this.valor, bola)); // retorna [nan]
console.log(mapComThis(array, bola));

// map sem this
const novoArray = array.map(item => item * 3);
console.log("novo array: " + novoArray);