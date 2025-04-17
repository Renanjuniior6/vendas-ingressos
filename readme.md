## Sistema de venda ingresso (API)

 - O projeto tem a finalidade de ser um sistema que vai permitir principalmente a compra de ingressos para eventos e listá-los. Podendo suportar grandes quantidades de acessos simultâneos e com controle de concorrência. O usuário poderá logar como cliente ou como parceiro administrador dos eventos
 
 - Através de um corpo em `JSON` a API vai realizar o processamento dos dados e retornar ao usuário;


### A seguir estão os requisitos não funcionais (RNF's) usados nessa API ->

## 💻 Tecnologias
- ✅ Nodejs
- ✅ Typescript
- ✅ MySQL
- ✅ AWS
- ✅ Docker 
- ✅ Bcrypt
- ✅ JWT (Json Web Token)
- ✅ Express

### Os requisitos funcionais (RF's) da API são ->

## ⚙ Funcionalidades
- As ações do sistema só são possíveis com o usuário logado. Então primeiro faça o cadastro como cliente em `/customer/register` ou então como parceiro se a pessoa for um `/partner/register`

- Em seguida faça o login em `/auth/login`

- Como cliente logado, é possível:
    - Visualizar os eventos disponíveis - `GET /events`
    - Comprar tickets do evento desejado - `POST /purchases`
    - Visualizar as informações de um evento em específico - `GET /events/:id`
    - Visualizar as informações de um ticket de um evento - `GET /events/:id/tickets/:id`
    - Visualizar os tickets de um evento - `GET /events/:id/tickets`

- Como parceiro logado é possível:
    - Criar eventos - `POST /partners/events`
    - Listar eventos do parceiro - ` GET /partners/events`
    - Listar um evento do parceiro - `GET /partners/events/:id`
    - Criar tickets para um evento - `POST /events/:id/tickets`
    - Executar todas as ações que um cliente tem acesso

## ⭕ Observações

O projeto a princípio executa suas requisições através de um container hospedado na <b>AWS</b>, mas está temporariamente fora do ar. Em breve estará ao ar novamente. No momento só é possível fazer requisições locais podendo usar o Docker ou rodar localmente;

## 📃 Informações
- A imagem gerada no container está na versão de desenvolvimento até o AWS voltar
- Por questões de desenvolvimento toda vez que a aplicação for salva o banco de dados será resetado
- As configurações do banco estão definidas para rodar localmente como localhost e root, 
- O projeto está estruturado na arquitetura MVC

## 👇 É recomendável ter em sua máquina para rodar
- [Node](https://nodejs.org/pt) 21.0^
- [Docker](https://www.docker.com/) Desktop ou Docker CLI 
- [WSL2](https://learn.microsoft.com/pt-br/windows/wsl/install) (se seu sistema for Windows)

## 🌐 Rodando a API localmente

```javascript
// Faça o git clone do projeto
$ git clone URL

// Instale as depedências
$ npm install

// Para executar digite
$ npx nodemon

// Se for rodar usando Docker certificar de que o banco de dados está de pé. Caso contrário não irá rodar a aplicação;
```

- Caso o serviço da AWS já esteja disponível é só ir direto para o arquivo `api.http` e fazer as requisições através dos endpoints

## 🌐 Rodando o container do MySQL no Docker

```javascript
// Com o docker instalado na sua máquina, execute
$ docker compose up

// Para derrubar o container execute
$ docker compose down

// Para parar o container execute
$ docker compose stop
```

## 🌐 Testando se o MySQL está ativo

```javascript
// Primeiro acesse o bash do MySQL no container
$ docker compose exec mysql bash

// Depois execute
$ mysql -uroot -proot

// Em seguida execute este comando para verificar a integridade do banco
$ use tickets

// Se não retornar nenhum erro você pode executar este comando para mostrar as tabelas do banco
$ show tables
```