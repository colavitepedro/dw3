# dw3backend — API REST (Postgres + JWT)

API REST do curso DW3. CRUD de alunos e cursos, autenticação JWT,
senhas com bcrypt, conexão com PostgreSQL via `pg`.

## Como rodar

1. Subir Postgres e criar o schema:
   ```bash
   psql -U postgres -d dw3 -f database/schema.sql
   ```
2. Configurar env:
   ```bash
   cp .env.example .env
   # editar .env com as credenciais do seu Postgres
   ```
3. Instalar e iniciar:
   ```bash
   npm install
   npm start
   ```

Servidor sobe em `http://localhost:40000` (configurável via `PORT`).

## Variáveis de ambiente

| Variável       | Descrição                                |
|----------------|------------------------------------------|
| `APP_NAME`     | Nome exibido nos logs                    |
| `PORT`         | Porta HTTP                               |
| `SECRET_API`   | Segredo usado para assinar JWT           |
| `DB_NAME`      | Nome do banco                            |
| `DB_USER`      | Usuário do Postgres                      |
| `DB_PASS`      | Senha do Postgres                        |
| `DB_HOST`      | Host do Postgres                         |
| `DB_PORT`      | Porta do Postgres (default 5432)         |

## Estrutura

```
dw3backend/
  app.js                  ← entry point (CORS + middlewares + rotas)
  routes/router.js        ← mapa de endpoints
  apps/
    alunos/{controller,model,tests}
    cursos/{controller,model,tests}
    login/{controller,model,tests}
  database/
    databaseconfig.js     ← pool do pg
    schema.sql            ← DDL + seeds
```

## Endpoints

### Login
- `POST /Login` — recebe `{ UserName, Password }`, retorna `{ auth, token }`
- `POST /Logout` — retorna `{ auth: false, token: null }`

### Alunos (protegidos com `Authorization: Bearer <token>`)
- `GET /getAllAlunos`
- `GET /getAlunoByID/:alunoid`
- `POST /insertAluno`
- `PUT /updateAluno/:alunoid`
- `DELETE /deleteAluno/:alunoid`

### Cursos (protegidos com `Authorization: Bearer <token>`)
- `GET /getAllCursos`
- `GET /getCursoByID/:cursoid`
- `POST /insertCurso`
- `PUT /updateCurso/:cursoid`
- `DELETE /deleteCurso/:cursoid`

Arquivos `.rest` em `apps/<domínio>/tests/` para testar via REST Client (VS Code).
