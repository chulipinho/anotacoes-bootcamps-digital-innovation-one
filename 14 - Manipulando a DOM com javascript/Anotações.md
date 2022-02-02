# Aula 01 - Entendendo o D.O.M.

É um padrão de como você acessa e modifica os elementos HTML. Basicamente é a árvore de componentes de uma página da web.

## D.O.M. vs B.O.M.

BOM (Browser Object Model) é a árvore de dependencias dentro da janela do navegador. O DOM (Document Object Model) é um dos filhos do BOM.



# Aula 02 - Selecionando elementos

A estrutura de uma página é composta basicamente por tags, ids e classes. Através dessas tags e atributos é possível identificar e acessar os elementos dentro da árvore. Os ids são únicos enquanto as classes podem ser compartilhadas por diferentes tags.

Principais metodos para seleção de elementos:

- document.getElementById("titulo"); retorna o elemento cujo id é titulo. Ex: <h1 id='titulo'> 

- document.getElementsByTagName("li"); retorna um array contendo os elementos que tenham essa tag, mesmo que haja apenas um elemento. 
  
  Ex: 
  
  ```html
  [
      <li> item1 </li>,
      <li> item2 </li>
  ]
  ```

- document.getElementsByClassName("imagem"); retorna uma lista contendo todos os elementos que compartilham aquela classe, mesmo que seja apenas um.

- document.querySelectorAll(".classe1 .classe2"); retorna um array contendo resultados de uma busca personalizada que contenham as tags e/ou classes especificadas.

Principais métodos para adicionar ou deletar elementos:

- document.createElement(element); cria um novo elemento,

- document.removeChild(element); remove um elemento filho.

- doccument.appendChild(elemento); adiciona um elemento filho.

- document.replaceChild(new, old); subsrtitui elementos filhos.



# Aula 03 - Trabalhnado com estilos

através de classes e ids é possível selecionar elementos e adicionar estilos através do css. Para selecionar essas classes pelo Javascript utiliza-se o método .classList que retorna as classes de um elemento. 

![](C:\Users\felli\AppData\Roaming\marktext\images\2022-02-01-15-34-28-image.png)

Também é possível acessar o documento css através do Javascript.

![](C:\Users\felli\AppData\Roaming\marktext\images\2022-02-01-15-37-19-image.png)



# Aula 04 - Eventos

Eventos são qualquer interação do usuário com a página.

Tipos de evento:

- Eventos do mouse:
  
  - mouseover, mouseout

- Eventos de clique:
  
  - click, dbclick

- Eventos de Atualização:
  
  - change, load

Para acionar esses eventos utiliza-se o método addEventListener, que espera o evento ocorrer e executa uma função. Também é possivel utiliza-los diretamente nas páginas HTML adicionando a pala on antes dos eventos e adicionando diretamente nas tags. 

Ex: <h1 onclick: 'function()'>


