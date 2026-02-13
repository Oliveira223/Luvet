# Guia de Estrutura do Template

Este template foi projetado com foco em **Clean Code** e **Manutenibilidade**. Abaixo, o guia de como navegar e customizar o projeto.

## Estrutura de Pastas

### `app/`
Onde vivem as rotas e páginas.
- `page.tsx`: A página inicial. Ela carrega os dados de `content/` e monta os componentes.
- `layout.tsx`: O shell da aplicação (Navbar, Footer, Fontes).

### `components/`
Componentes React reutilizáveis.
- `sections/`: Grandes blocos da página (Hero, Features, CTA). Cada arquivo aqui foi refatorado para ser legível e modular.
- `layout/`: Navbar e Footer.
- `ui/`: Componentes atômicos (Button, Card, Container).

### `content/`
Dados estáticos do site.
- `home.json`: O texto e imagens da página inicial. Edite aqui para mudar o conteúdo sem tocar em código.

### `lib/`
Lógica de backend/utilitários.
- `content.ts`: Carregador de conteúdo com tipagem forte.

### `types/`
Definições de TypeScript.
- `content.ts`: Define a estrutura exata dos dados do site (Interfaces).

## Como Customizar

1. **Alterar Textos**: Edite `content/home.json`.
2. **Alterar Cores**: Edite `styles/globals.css` (variáveis CSS).
3. **Alterar Layouts**: Vá em `components/sections/` e edite o componente desejado.
4. **Adicionar Seções**: 
    - Crie o componente em `components/sections/`.
    - Adicione os dados em `content/home.json`.
    - Adicione a tipagem em `types/content.ts`.
    - Importe e use em `app/page.tsx`.

## Filosofia de Código

- **Componentes Pequenos**: Funções grandes foram quebradas em sub-componentes (ex: `Hero` -> `HeroTitle`, `HeroActions`).
- **Tipagem Forte**: O uso de TypeScript em `types/content.ts` garante que você não erre o nome dos campos no JSON.
- **Separação de Dados**: O conteúdo (JSON) é separado da apresentação (JSX).
