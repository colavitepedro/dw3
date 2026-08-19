# DW3 — Repositório da disciplina Desenvolvimento Web 3

Repositório com os projetos práticos da disciplina DW3. Cada pasta
abaixo é um projeto Express independente, com seu próprio `package.json`,
`.env.example`, `.gitignore` e `README`.

## Projetos

| Pasta                | Descrição                                                    |
|----------------------|--------------------------------------------------------------|
| `1_primeiro/`        | Hello World — primeiro contato com Express + dotenv          |
| `2_segundo/`         | Controllers e rotas — separação de responsabilidades         |
| `dw3backend/`        | API REST completa (Postgres + JWT + bcrypt)                  |
| `dw3frontend/`       | Frontend Express + Nunjucks consumindo o backend             |
| `dw3frontendlayout/` | Frontend focado em herança de templates (layout/extends)     |
| `dw3frontendvash/`   | Frontend com template engine Vash (estilo Razor)             |

## Como rodar cada projeto

Em qualquer pasta:

```bash
cp .env.example .env       # configurar variáveis
npm install                # instalar dependências
npm start                  # subir o servidor
```

Cada projeto roda em uma porta diferente (ver README de cada um).

## Observações

- Os arquivos `.env` NÃO são versionados (já há `.gitignore` em cada
  projeto). Use `.env.example` como referência.
- A API (`dw3backend`) precisa de um Postgres rodando. O schema está em
  `dw3backend/database/schema.sql`.
- Os arquivos `*.rest` em `dw3backend/apps/<domínio>/tests/` são para a
  extensão **REST Client** do VS Code.

## Estrutura geral

```
dw3/
├── .gitignore                  ← ignora node_modules/.env em qualquer nível
├── README.md                   ← este arquivo
├── 1_primeiro/                 ← projetos independentes (cada um com seu package.json)
├── 2_segundo/
├── dw3backend/
├── dw3frontend/
├── dw3frontendlayout/
└── dw3frontendvash/
```
