# Aula 03 - Reduce

Ele não retorna outro array, mas sim executa uma função em todos os elementos de um array e retorna um valor único.

```js
array.reduce(callback, initialValue)
// callback: função à ser executada a partir do acumulador
// initialValue: valor sobre o qual o retorno irá atuar


const callback = function(accumulartor, currentValue, index,array) {
    // função
}
// accumulator: acumulador de todas as chamadas
// currentValue: elemento atual sendo acessado pela função
```

**Exemplo de uso**: somar todos os items do array.


