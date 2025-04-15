comando para rodar o projeto: 
- npx nodemon

comando para rodar o container do banco de dados:
- docker compose up

comando para acessar o serviço dentro do mysql:
- docker compose exec mysql bash

testar para ver se o mysql está realmente funcionando dentro do bash:
-mysql -uroot -proot
-ENTER
-use tickets
-show tables -> vai mostrar as tabelas criadas

comando para compilar o código typescript para javascript
- npm run build
- no arquivo tsconfig.json temos que configurar a nossa pasta diretório para "Outdir": "./dist";
- e colocar o script no package.json "build": "tsc";

OBS: 
- Função da lib mysql2: Usar mysql com node
- Toda vez que atualizar a aplicação o banco de dados será resetado
- As variáveis de ambiente estão no docker-compose
- A imagem gerada do "docker-compose" é uma imagem mais para produção, poderia criar uma para desenvolvimento também, mas não é o nosso foco agora