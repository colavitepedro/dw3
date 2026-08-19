# dw3frontend — Express + Nunjucks

Frontend Express com **Nunjucks** consumindo a API do `dw3backend`.
Inclui tela de login (JWT), home, listagens de alunos/cursos e logout.

## Como rodar

```bash
cp .env.example .env
npm install
npm start
```

Servidor sobe em `http://localhost:40100` (porta padrão).

## Variáveis de ambiente

| Variável       | Descrição                                | Default                |
|----------------|------------------------------------------|------------------------|
| `APP_NAME`     | Nome exibido nos logs                    | `dw3frontend`          |
| `PORT`         | Porta HTTP                               | `40100`                |
| `SERVIDOR_DW3` | URL base da API `dw3backend`             | `http://localhost:40000` |

## Estrutura

- `app.js` — configuração Express (views, middlewares, error handlers)
- `bin/www` — entry point (cria o servidor HTTP)
- `routes/` — roteadores por domínio
  - `rtIndex.js` — redireciona `/` → `/login`
  - `rtLogin.js` — tela de login (form + JS)
  - `rtHome.js` — painel principal
  - `rtAlunos.js`, `rtCursos.js` — listagens
  - `logout.js` — limpa sessão e redireciona
- `views/` — templates `.njk`
- `apps/login/vwLogin.js` — JS de submit do form (chama `/Login` da API)
- `public/` — assets estáticos
