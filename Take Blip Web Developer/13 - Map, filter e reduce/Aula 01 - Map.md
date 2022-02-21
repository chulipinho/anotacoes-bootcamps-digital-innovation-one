# Aula 01 - Map

O método map é quando um conjunto passa por uma operação e torna-se outro conjunto. Desta forma, este método aplica uma função a cada item do array, retornando um novo array sem alterar o original

```js
array.map(callback(item, index, array), thisArg);
```

## map vs forEach

```js
// usando map
const array = [1, 2, 3];

array.map((tem) => item * 2); // retorna [2, 4, 6]

// usando forEach
const array = [1, 2, 3];

array.forEach((item) => item * 2) // retorna undefined
```

A diferença entre os dois é o valor de retorno. Para utilizar o novo array gerado em forEach, deve-se atribuí-lo à uma variável.




