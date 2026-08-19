# 2_segundo — Controllers e Rotas

Segunda atividade da DW3. Introduz a separação entre `routes/` e
`controller/` e o uso do pattern IIFE async.

## Como rodar

```bash
cp .env.example .env
npm install
npm start
```

Servidor sobe em `http://localhost:40000`.

## Endpoints

- `GET /` — mensagem padrão
- `GET /helloUserGet/:nome` — saudação por parâmetro de rota
- `POST /helloUserPost` — saudação via corpo JSON `{ "username": "..." }`

## Estrutura

- `app.js` — entry point
- `routes/route.js` — definição das rotas
- `controller/ctlHello.js` — lógica de cada rota
- `tests/test.rest` — chamadas REST Client (VS Code)
