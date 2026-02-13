# Editando o Conteúdo

Este template separa o conteúdo textual da estrutura do código para facilitar a manutenção.
Os textos principais estão localizados na pasta `/content`.

## Como editar

1. Abra o arquivo JSON correspondente à página (ex: `home.json`).
2. Altere os valores das chaves.
   - **Exemplo:** Para mudar o título do Hero, edite `hero.title`.

## Estrutura do JSON (Home)

```json
{
  "hero": {
    "title": "Título Principal",
    "description": "Subtítulo ou descrição curta.",
    "cta": "Texto do Botão"
  },
  "features": { ... }
}
```

## Adicionando novas seções

Se você criar um novo componente de seção em `components/sections`, lembre-se de:
1. Adicionar os dados correspondentes no JSON.
2. Atualizar a tipagem se necessário.
3. Passar os dados via props na página (`app/page.tsx`).
