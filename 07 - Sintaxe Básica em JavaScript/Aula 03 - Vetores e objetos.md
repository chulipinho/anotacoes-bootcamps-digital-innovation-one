# Aula 03 - Vetores e objetos

## Vetores ou Arrays

São uma lista ou matriz de variáveis. São variávels que armazenam diversas variáveis em seu valor.

Para declarar arrays utilizam os [].

```javascript
var array = ["string", 1, true];


// Para acessar os elementos
console.log(array[0]);

// imprime "string"
```

## Manipulando arrays

Metodos para manipulação de arrays: 

- forEach() - itera um array

- push() - adiciona um item no final do array

- pop() - remove o ultimo item do array

- shift() - remove o item no início do array

- unshift() - adiciona um item no início do array

- indexOf() - retorna o índice de um valor

- splice() - remove ou substitui um item através índice

- slice() - retorna uma parte de um array existente

# Objetos

Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}".

```javascript
var xicara = {
    cor: 'azul',
    tamanho: 'p',
    funcao: tomarCafe()
}


// para acessar os valores
console.log(xicara.cor); // imprime 'azul'


```
