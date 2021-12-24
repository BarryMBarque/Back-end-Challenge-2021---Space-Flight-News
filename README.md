# Back-end-Challenge-2021---Space-Flight-News

[Projeto](https://github.com/BarryMBarque/ApiVegetable)-produzido por [Barry Malick Barque](https://github.com/BarryMBarque).


A Api foi desenvolvido em node.js, utilzando Express, a linguagem Typescript e foi utilizada a IDE visual Studio Code


## Començando
Para fazer o uso do Api, algumas ferramentas serão necessárias:

* [Node.js](https://nodejs.org/pt-br/download/package-manager/) Necessário para a compilação do código;
* [MongoDB](https://www.docker.com/get-started) O docker sera necessário para a criação da imagem para o banco de dados





## Arquivo .env.example 
Mostra as configurações do projeto.

  
## Executando
* execute o comando Yarn para baixar as dependencias necessárias
* adicione o url do Mongo Atlas no arquivo .env
* execute yarn dev:server para executar a API

## Funcionalidades
* [GET]/:  Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"

* [GET]/articles/:   Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST

* [GET]/articles/{id}: Obter a informação somente de um artigo

* [POST]/articles/: Adicionar um novo artigo

* [PUT]/articles/{id}: Atualizar um artigo baseado no id


* [DELETE]/articles/{id}: Remover um artigo baseado no id
  
