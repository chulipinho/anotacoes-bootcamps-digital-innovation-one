# Aula 02 - Filter

O método filter retorna apenas os itens que passam pelo filtro passado no parâmetro.

```js
array.filter(callback, thisArg)
```

```js
const frutas = ['maçã fuji', 'maçã verde', 'laranja'];

frutas.filter((fruta) => fruta.includes('maçã'));
// retorna ['maçã fuji', 'maçã verde'];
```


