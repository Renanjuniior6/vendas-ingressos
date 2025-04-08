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

OBS: 
- Função da lib mysql2: Usar mysql com node
- Toda vez que atualizar a aplicação o banco de dados será resetado