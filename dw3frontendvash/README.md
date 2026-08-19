# dw3frontendvash — Express + Vash

Frontend Express com **Vash** (template engine estilo Razor/.NET).

## Como rodar

```bash
cp .env.example .env
npm install
npm start
```

Servidor sobe em `http://localhost:40200` (porta padrão).

## Estrutura

Gerada via `express-generator --vash`:
- `app.js` — configuração do Express (views, middlewares)
- `bin/www` — entry point (cria o servidor HTTP)
- `routes/` — roteadores por domínio
- `views/` — templates `.vash`
- `public/` — assets estáticos

## Sobre Vash

Vash é uma engine de templates que permite escrever HTML com sintaxe
similar ao Razor do ASP.NET:

```vash
@html.extend('layout.vash', function(model) {
  @html.block('content', function(model) {
    <h1>@model.title</h1>
  })
})
```

Mais detalhes: https://github.com/kirbysayshi/vash
