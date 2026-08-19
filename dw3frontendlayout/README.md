# dw3frontendlayout — Express + Nunjucks (Layout)

Frontend Express com **Nunjucks** focado em herança de templates
(layout/extends/block).

## Como rodar

```bash
cp .env.example .env
npm install
npm start
```

Servidor sobe em `http://localhost:40100` (porta padrão).

## Estrutura

- `app.js` — entry point + configuração do Nunjucks
- `views/` — templates `.njk`
  - `layout.njk` — layout base com navbar Bootstrap
  - `login.njk`, `home.njk`, `alunos.njk`, `cursos.njk`, `error.njk`
- `public/` — assets estáticos (CSS)

## Sobre Nunjucks

Engine de templates do Mozilla, similar ao Jinja2/Twig. Suporta
`{% extends %}`, `{% block %}`, `{% include %}`, filtros e macros.

Documentação: https://mozilla.github.io/nunjucks/
