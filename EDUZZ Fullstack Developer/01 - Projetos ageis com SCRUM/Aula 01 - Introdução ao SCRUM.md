# Aula 01 - Introdução ao SCRUM

Toda empresa possui um objetivo, e o desenvolvimento de software procura auxiliar essa empresa a alcançar esse objetivo. 

O processo de desenvolivmento de software inclui: 

- Concepção

- Análise e Design

- Desenvolvimento

- Testes

- Implantação

Contudo, quando um software é desenvolvido, apenas 20% dos usuários utilizam todas suas funcionalidades. Isso gera um desperdício do potencial desse programa.

## Gestão de projetos tradicional X ágil

O processo tradicional, tambem chamado de waterfall, só permite que o projeto avance quando uma fase está inteiramente completa.

REQUISITOS -> DESIGN -> IMPLEMENTAÇÃO -> VERIFICAÇÃO -> MANUTENÇÃO

Isso faz com que o processo demande muito tempo e passa por vários empecílios no durante o desenvolvimento.

Já no método ágil o software é construído por partes (incremental) e cada parte executa um ciclo (iterativo). 

| TRADICIONAL                                                   | AGIL                                                                       |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Escopo definitivo na fase inicial do projeto (preditivo)      | Escopo definitivo ao longo do projeto (adaptativo).                        |
| Projeto é controlado por fases e marcos                       | Projeto é controlado por funcionalidades entregues.                        |
| Cliente só vê o software funcionando na fase final do projeto | cliente pode ver parte do software funcionando na parte inicial do projeto |
| resistência a mudanças.                                       | Mudanlas constantes de acordo com feedbacks contínuos.                     |

## Gestão de projetos ágil

O que é ser ágil?

- Rapidez (mudança) e desembaraço

- fazer coisas complexas de forma simples

- Equipe comprometida com os objetivos

- Maior valor para o cliente

- Ter capacidade de responder rapidamente a mudanças

## SCRUM

O SCRUM é um dos frameworks de gerenciamento de projetos ágil, utilizando equipes pequenas e multidisciplinares para produzir os melhores resultados.

Os pilares do SCRUM:

1. TRASPARÊNCIA: Conversar mais e escrever menos. Demonstrar constantemente aos usuários e obter feedbacks constantes.

2. ADAPTAÇÃO: Requisitos mudam ao longo do tempo.

3. INSPEÇÃO: Apreder progressivamente com o uso do software.

Razões para adotar o SCRUM: 

- Desenvolvimento e entrega em partes menores, com constante feedback dos usuários;

- Melhor gerenciamento de riscos

- Comprometimento, motivação e transparência da equipe (daily meeting)

- Maior valor para o negócio

- Usuários envolvidos durante todo o ciclo

- Aplicação das lições aprendidas (melhoria contínua)

Características do SCRUM:

- Equipes capazes de se auto organizar

- As tarefas são do time e todos são responsáveis

- Forte comprometimento com os resultados

As statups utilizam o método ágil para entregar um Mínimo Produto Viável (MVP), que é o produto mínimo que pode ser utilizável, e com base nos feedbacks dos clientes, desenvolvem mais a aplicação.

## Papeis e responsabilidades

**PO - Product Owner**

Representa a área de negócios. É uma pessoa, não um comitê. É ele que define as funcionalidades do software e prioriza as funcionalidades com base no valor do negócio. Também é responsável por garantir que o time de desenvolvimento entenda as funcionalidades a serem implementadas.

**SM - SCRUM Master**

Garante o uso correto do SCRUM, assegurando que as serimônias sejam cumpridas e que o time fique autogerenciado. Não é um gerente de projetos, ou seja, não delega as atividades para o time. Age como um facilitador caso o time não entenda as funcionalidades explicadas pelo PO. Auxilia o PO no planejamento e estimativas do backlog e auxilia a equipe a remover impedimentos, treinando o time em gerenciamento e interdisciplinaridade

**Time de Desenvolvimento**

Possui habilidades suficientes para desenvolver, testar, criar e desenhar, ou seja, tudo que for necessário para entregar o software funcionando.

## Cerimônias do SCRUM

Nas cerimônias do SCRUM temos a **Time Box**. Ela assegura um tempo limite para realização destas, de forma a não exaltar o tempo delimitado.

**Sprint**

É o princioal evento do SCRUM e tem duração máxima de 30 dias. Esta duração é definida pelo time ou pelo SCRUM Master.

Uma Sprint é composta por:

- Planejamento da Sprint
  
  - Reunião composta pelo PO, SM e o time
  
  - Nessa reunião o PO explica o que ele deseja naquela Sprint (o que o time deve entregar).
  
  - Time tira as dúvidas necessárias
  
  - É exclarecido como fazer o projeto
    
    - o time de desenvolvimento quebra as atividades e planeja como será entregue ao PO
    
    - O time estima o valor das tarefas e verifica se será possível entregar todos os objetivos dados pelo PO.
  
  - O time retorna ao PO o que será possível entregar.

- Reuniões diárias (Daily Meeting)
  
  - Participam o time de desenvolvimento, o PO e o SM
  
  - o time de desenvolvimento responde o que fez no dia anterior, o que está programado no dia e se existe algum impedimento.
  
  - Possui uma time box de 15 minutos.
  
  - Deve acontecer com os participantes de pé

- Revisão da Sprint (Review)
  
  - Time de desenvolvimento apresenta ao PO o trabalho feito
  
  - Time Box: 4h
  
  - O PO também pode levar Stake Holders

- Retrospectiva da Sprint
  
  - A equipe se reúne e aponta os erros cometidos pela equipe em qualquer uma das etapas.
  
  - o PO e o SM também podem participar
  
  - Time Box: 3h para um Sprint de 30 dias

# Aula 02 - Fundamentos de um projeto ágil

## Papeis e responsabilidades do Project Owner

O PO representa o profissional que tem a visão do que será desenvolvido, a fim de atender as necessidades observadas nos clientes. Ele também é responsável por organizar as sprints e, no pior dos casos, cancelá-las.

Não existe hierarquia entre o PO e o Scrum Master para que não haja conflito de interesses.

**Papeis e responsabilidades:**

- Representante da área de negócios

- Não é um comitê

- Define as funcionalidades do software(backlog)

- Prioriza as funcionalidades de acordo com o valor do negócio

- Garante que o time de desenolvimento entenda os items do backlog no nível necessário

Não é obrigatório que o PO participe das sprints, mas é importante para sanar possíveis dúvidas do time de desenvolvimento,

### Refining e planning

Na refining o PO apresenta previamente ao time as estórias que serão apresentadas na planning, para que possam tomar conhecimento do projeto e fazer os devidos questionamentos. Desta forma, caso alguma dúvida não possa ser sanada, o PO pode buscar uma resposta até a data da planning.

A planning é dividida em duas etapas. Primeiramente o PO apresentas os items mais refinados e priorizados do backlog e sana todas as dúvidas necessárias. O time não deve ficar com nenhuma dúvida e nada deve ser suposto. Na seguinda etapa, é recomendado que o PO não participe. O time deve anotar quais atividades deverão ser desenvolvidas para que cada esstória seja finalizada. 

Com as estórias mapeadas e as atividades descritas, começa a Sprint Backlog. Nesta etapa o PO deve validar qual dos items é considerado prioritário e que deve ser considerado o objetivo pricipal da sprint. Em teoria, se essa atividade cair, a sprint perde o sentido. Nesse caso deve-se alterar ou até mesmo cancelar a sprint, já que o objetivo não será alcançado.

### Release planning

A release é a liberação do software como produto. Para que essa release aconteça, é necessário que uma ou mais sprints sejam finalizadas. Não existe um número exato de sprints necessárias para que uma release aconteça, mas vale ressaltar que, quanto mais sprints, mais complexa será a organização da release.

#### Release planning de múltiplas squads

Nessa modalidade varias squads participam da produção para release, não necessariamente realizando tarefas interligadas. É importante que todas elas realizem as entregas dentro do prazo e, para o PO, é necessário que fique atento aos prazos da sua própria equipe.

#### Release planning de projeto

Nessa modalidade o PO deve conhecer a dimensão do projeto e quebra-lo em várias sprints e estórias menores. É importante que o PO tenha uma certa senioridade para reconhecer o real tamanho das tarefas e organiza-las de maneira condizente com o esforço necessário para cada uma delas. 

O PO deve também priorizar as tarefas de maior valor e pode receber o retorno do cliente para aprimorar as futuras sprints dentro das necessidades observadas.

## Analisando escopo e definindo prioridades

### Definindo escopo e prioridade

Para definir um escopo é necessário definir um mínimo produto viável. A partir desse produto, os clientes enviarão feedbacks que influenciarão no desenvolvimento das próximas releases, até que um produto final satisfatório seja entregue.

Por isso é importante inspecionar cada entrega, a fim de perceber se as necessidades foram cumpridas e entender como o produto pode ser aprimorado. 

## Product backlog

O backlog deve conter as informações de apenas um produto.

É composto por épicos e estórias. Os épicos são os incrementos necessários para que o produto seja considerado entregue. Não possuem muito detalhamento, servem para definir as atividades de maneira macro. 

As estórias são detalhamentos dos épicos, que podem ser divididos em várias estórias. Nelas são descrita o que deve acontecer e suas regras de negócios.

### Escrevendo uma estória

- Nome da estória

- Descrição da estória (Eu, como, quero, quando)

- Regras do negócio (separar regras de front-end de regras de back-end)

- Tela(Link ou imagem das telas a serem desenvolvidas)

- KPI (Quais os objetivos/valor a estória precisa atingir)

- Tagueamento (Como a estória será "tagueada" para poder mensurar o KPI)]

- Critérios do aceite (Qual o passo a passo de todos os caminhos felizes possíveis a estória deve cumprir para que ela seja considerada aceita)




















































