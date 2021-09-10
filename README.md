# IMAPI

## Descrição
IMAPI é um acrônimo para Instrumento de Monitoramento e Avaliação de Projetos Incubados. Esta ferramenta nasceu como uma oportunidade de aprendizado para os estudantes da disciplina de Engenharia de Software 2 do segundo período de 2021 pela UFFS. Os principais problemas indentificados pela equipe original e aos quais esta plataforma visa solucionar, foram: organização e centralização dos processos relacionados as startups que serão incubadas pela incubadora de negócios INNE.

## Começando

### Dependências
Ferramentas necessárias para executar a solução:
- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/) 
- [Vue.js](https://vuejs.org/)

### Instalação
Clone o repositório com o comando:
```
git clone https://github.com/ES2-2021-1/IMAPI
```
Note que para os passos seguintes espera-se que `Node.js` e `npm` estejam instalados. Mude para a raiz do diretório criado pelo git.
```
cd IMAPI
```
Com o comando abaixo, o `npm` irá utilizar o `package-lock.json` para resolver as dependências automaticamente.
```
npm ci
```

### Inicialização
Configure o seu servidor com a criação de um arquivo ``.env``. Pode-se usar de exemplo o ``.env.exemplo`` e criar automaticamente o arquivo com ``cp .env.example .env``. Exemplo de um possível ``.env`` configurado:
```
PORT=8082
NODE_ENV="release"

DB_NAME= meu_database
DB_USER= meu_usuario
DB_PASSWORD= minha_senha
DB_HOST= localhost
DB_PORT= 5432
```

Agora, crie as tabelas no banco com o comando:
```
npx sequelize-cli db:migrate
```

Seu servidor está pronto para ir ao ar! Inicialize-o com:
```
nodemon server.js
```

## Documentação
Arquivos relevantes para o desenvolvimento da ferramenta como referências e diagramas, bem como seus respectivos arquivos de edição, podem ser encontrados na pasta `Documentação`.

### Ferramentas e versões
Algumas ferramentas utilizadas internamente para facilitar o desenvolvimento do software e suas respectivas versões:
- [Bootstrap Studio](https://bootstrapstudio.io/) (v5.8.1): prototipação das telas. O arquivo de edição .bsdesign se encontra na pasta `Documentação/Front end/Prototipação das telas`.
- [BrModelo](http://www.sis4.com/brModelo/) (v3.0): modelagem do banco de dados. O arquivo de edição .brM3 se encontra na pasta `Documentação/Modelagem do banco de dados`.
- [draw.io](https://app.diagrams.net/): diagramas UML. Os arquivos de edição .drawio se encontram em `Documentação`, em suas respectivas pastas.
- [Vue Devtools](https://github.com/vuejs/devtools#vue-devtools) (v3.0): para facilitar a inspeção de elementos HTML no navegador.

### Documentação das rotas
A documentação das rotas pode ser encontrada [neste link](https://es2-2021-1.github.io/IM_API/).

### Contato
Alguns desenvolvedores que disponibilizaram seus contatos em caso de dúvidas no futuro:
- Dra. Graziela Tonin (professora): gttonin@gmail.com
- Alisson Peloso (dev): alisson.luan2000@gmail.com
- Rafael Fernandes (dev): rflgf0@gmail.com
