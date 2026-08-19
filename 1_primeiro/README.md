# 1_primeiro — Hello DW3

Primeira atividade prática da disciplina DW3. App Express minimalista
que lê `APP_NAME` e `PORT` do `.env` e responde "Hello DW3!" na raiz.

## Como rodar

```bash
cp .env.example .env
npm install
npm start
```

Servidor sobe em `http://localhost:40000`.

## Estrutura

- `app.js` — entry point
- `.env.example` — template das variáveis de ambiente (não commita `.env`)
