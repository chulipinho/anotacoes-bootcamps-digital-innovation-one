# Aula 02 - Orientação à objetos em javascript

## Protótipos

Todos os objetos em Javascript herdam propriedades e métodos de um prototype. O objeto 'Object.prototype' está no topo desta cadeia.

## Classes

Classes não existem nativamente em javascript, mas a partir do ECMAScript 6, implementou um _syntatic sugar_ para facilitar essa escrita.

```javascript
class Meal {
    constructor (food) {
        this.food = food;
    }

    eat() {
        console.log("comeu");
    }
}
```


