# Guia de Arquitetura e Backend

Este guia explica como expandir este template para ter banco de dados e backend.

## 1. Estrutura de Pastas Sugerida

O Next.js é Full Stack. Você não precisa de um servidor separado.

```
app/
  ├── api/              # (Opcional) Rotas API REST tradicionais (ex: /api/users)
  ├── actions/          # Server Actions (Funções de Backend chamadas pelo Frontend)
lib/
  ├── db.ts             # Conexão com o Banco de Dados (Prisma)
  ├── utils.ts          # Funções auxiliares
prisma/
  ├── schema.prisma     # Definição das tabelas do banco
```

## 2. Banco de Dados Recomendado

Use **PostgreSQL** com **Prisma ORM**.

### Como configurar (Exemplo Rápido):

1. Instale o Prisma:
   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   npx prisma init
   ```

2. Defina seu banco em `prisma/schema.prisma`:
   ```prisma
   model User {
     id    Int     @id @default(autoincrement())
     email String  @unique
     nome  String?
   }
   ```

3. Use no seu código (`app/page.tsx` ou Server Actions):
   ```ts
   import { PrismaClient } from '@prisma/client'
   const prisma = new PrismaClient()

   async function getUsers() {
     const users = await prisma.user.findMany()
     return users
   }
   ```

## 3. Deploy e Domínios (VPS)

Quando você contratar uma VPS (Ubuntu), o fluxo será:

1. **DNS:** Aponte o Domínio (Tipo A) para o IP da VPS.
2. **Reverse Proxy (Caddy):** Na VPS, usamos o Caddy para receber a requisição e mandar para a porta do Docker.

Exemplo de `Caddyfile` na VPS:
```
meusite.com {
    reverse_proxy localhost:3001
}
```
Isso faz o site abrir sem precisar digitar a porta.
