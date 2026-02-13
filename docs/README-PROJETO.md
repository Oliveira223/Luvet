# Guia do Projeto

Este projeto foi gerado a partir do **Site Factory Template**.
Ele utiliza Next.js 14, Tailwind CSS e uma arquitetura baseada em componentes.

## Estrutura Principal

- `/app`: Páginas e Layouts (App Router).
- `/components`: Componentes React.
  - `/ui`: Componentes base (Botões, Inputs, Cards).
  - `/sections`: Blocos de página (Hero, Features).
  - `/layout`: Navbar e Footer.
- `/content`: Arquivos JSON que alimentam o texto do site.
- `/lib`: Utilitários e lógica de carregamento de dados.

## Desenvolvimento Local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:3000`.

## Customização Visual

- Cores e Fontes: Edite `styles/globals.css` (variáveis CSS) e `tailwind.config.ts`.
- Componentes: Edite os arquivos em `components/`.
