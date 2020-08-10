# Mesha Atividade 01 - Fluxo de Atendimento - API

Teste do Processo seletivo Mesha - Full Stack

## 📋 Instruções
É necessário ter instalado Node.js, Git e Docker

Rodando a aplicação:
```bash
#clonado o repositório
git clone https://github.com/marcelotk15/mesha-test-atividade1-api

#acessar a pasta
cd mesha-test-atividade1-api

#iniciar banco de dados no docker
docker-compose up -d

#baixando as dependências
yarn 

#migration do banco de dados
NODE_ENV=development yarn sequelize db:migrate

#iniciando o servidor
yarn dev
```
