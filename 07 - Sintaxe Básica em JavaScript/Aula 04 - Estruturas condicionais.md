# Aula 04 - Estruturas condicionais

São intruções para realizar determinadas tarefas a partir de uma condição.

Utiliza-se a palavra reservada "if" para relizar verificações condicionais. Caso a condição seja verdadeira, ele executa as intruções dentro do bloco. 

Existe também a palavra reservada "else" que executa o bloco caso a condição do if anterior não seja satisfeita. 

Por fim, temos a palavra reservada "else if" que, caso a condição do if anterior não seja satisfeita, realiza outra verificação para uma segunda condição.

```javascript
var a = 1;
var b = 2;

if (a > b) {
    console.log("a é maior que b");
} else if (a === b){
    console.log("a é igual à b");
} else {
    console.log("b é maior que a");
}

// imprime "b é maior que a"
```

### If ternário

É uma verificação condicional que acontece em uma linha:

[condição] ? [instrução1] : [instrução2];

```javascript
var a = 1;
var b = 2;

a === b ? console.log("são iguais") : console.log("são diferentes");
```

### Switch/case

switch (${expressão}) {

    case 1:

        ${instrução};

    break;

    case 2:

        ${instrução};

    break;

    case 3:

        ${instrução};

     break;

}

### Laços de repetição

- for
  
  - funciona como uma repetição até que uma condição seja falsa
    
    for (let i=0; i < 10; i++){
    
        // instrução é repetida 10 vezes;
    
    }

- for/in
  
  - laço de repetição a partir de uma propriedade

```js
var array = ['cavalo', 'gato', 'cachorro'];

for (let animal in array){
    // repete uma vez por item no array
    // armazena o índice de cada item na variavel 'animal'
    console.log(animal); // imprime a posição de cada vez
}
```

- for/of
  
  - funciona como repetição a partir de um valor

```js
var array = ['a', 'b', 'c'];

for (letra of array){
    // repete uma vez por item no array
    // armazena o valor de cada letra na variável 'letra'
    console.log(letra); // imprime cada ima das letras
}
```

- while 
  
  - executa o valor enquanto uma condição for verdadeira. A verificação é feita antes da execução

```javascript
var a = 0;

while(a < 10) {
    a++; // incrementa o valor de 'a' em 1 para cada execução
    console.log(a); // imprime os valores de 1 a 10
}
```

- do/while
  
  - executa uma instrução até que determinada condição seja falsa. A verificação é feita após a execução

```js
var a = 0;

do {
    a++;
    console.log(a);
} while(a < 10)
```
