# Aula 02 - Entendendo variáveis e seus valores

## Tipagem

É uma regra de uso de dados. Quanto mais forte a tipagem, mais obrigatória é a declaração do tipo de dado.

Javascript possui tipagem fraca, portanto a declaração do tipo ocorre de forma dinâmica. 

```javascript
// exemplo
var numero = 1;


// o JavaScript converte autmaticamente 
// a variavel 'numero' para o tipo Number
```

## Tipos primitivos

- Number - números

- Boolean - Verdadeiro e falso

- String - conjunto de caracteres

## Variáveis

São dados que variam dentro do código. Podem ser declaradas de formas diferentes:

- var - funciona no escopo global e local. Pode ter seu valor alterado. Caso não seja inicializada, será tratada como null

- let - funciona no escopo local em um bloco, pode ter seu valor alterado e, caso não inicializada, será tratada como null

- const - funciona no escopo local em um bloco. Precisa obrigatoriamente de um valor inicial que não pode ser alterado

## Escopo

Global - quando a variável é declarada fora de qualquer bloco, tornando acessável por todo o código

Local - quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não

## Regras de uso de variáveis

- Nomear com letras, underscore (_) ou $

- Não utilizar apenas números ou espaços na nomeação

- não usar palavras reservadas

- Declarar variáveis no início do escopo do código

# 
