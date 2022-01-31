function verifySize(arr, size) {
    if (!arr && !size) throw new ReferenceError('Os parâmetros não foram enviados');
    if (typeof arr !== 'object') throw new TypeError('O array não é um objeto');
    if (typeof size !== 'number') throw new TypeError('O tamanho não é um número');
    if (arr.length !== size) throw new RangeError('O array não tem o mesmo tamanho');

    return arr;
}

function runApp(arr, size) {
    try{
        array = verifySize(arr, size);
    }catch(e) {
        console.log("Algo deu errado...");
        console.log(e.message);
    }
    return array;
}

var arr = [1,2,3,4];

console.log(runApp(arr, 4));