# Aula 02 - Recursos básicos da linguagem

Arquivos JavaScript possuem a extenção .js



### Variáveis e constantes

São partes da memória alocadas para um valor específico que pode ser utilizado ao longo do programa.

**Variáveis** tem seus valores mutáveis, enquanto **constantes** mantêm seu valor. Uma boa prática em JavaScript é decorar constantes com todas as letras maiúsculas.

```javascript
// Exemplo

var variavel = 1;
const CONSTANTE = 10;


variavel = 2; // podemos alterar o valor 
              // da variável ao longo do código

CONSTANTE = 1; // retornará um erro no console
```



### Funções

Funções são declaradas com a palavra *function*, seguido pelo nome da função e (), onde são declarados os parâmetros (valores passados para dentro da função).

```javascript
function soma(a, b) {
    return a + b; // funções podem ou não retonar um valor
}


console.log(soma(2, 3)); // printa o valor 5
```




