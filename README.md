# POC SSR com o nuxt 3

Este projeto é uma **prova de conceito (POC)** para demonstrar os diferentes modos de renderização disponíveis no **Nuxt 3**, utilizando `routeRules` e integração com uma rota de API (`/api/time`).

A ideia é evidenciar como o **SSR (Server-Side Rendering)**, **ISR (Incremental Static Regeneration)**, **SSG (Static Site Generation)** e **SPA-only** funcionam na prática, além de mostrar como o Nuxt facilita o desenvolvimento de aplicações híbridas.

---

## 🚀 Rotas disponíveis

Você pode acessar as diferentes páginas para ver o comportamento de cada modo de renderização:

- [Home (ISR – atualizado a cada 120s)](http://poc-ssr-five.vercel.app/)
- [Dynamic (sem cache, sempre atualizado)](http://poc-ssr-five.vercel.app/dynamic)
- [Static (cacheado no primeiro acesso, sem rebuild)](http://poc-ssr-five.vercel.app/static)
- [Prerendered (pré-renderizado no deploy)](http://poc-ssr-five.vercel.app/prerendered)
- [SPA (apenas client-side, SSR desativado)](http://poc-ssr-five.vercel.app/spa)

Além disso, a API pode ser acessada diretamente:
- [API Time](http://poc-ssr-five.vercel.app/api/time)

---

## Setup

Instale as dependências do projeto:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

É recomendado acessar o arquivo de configuração `nuxt.config.ts` para entender como os diferentes modos de renderização foram configurados utilizando `routeRules`.

## Produção

Essa aplicação foi disponibilizada para produção utilizando a [Vercel](https://vercel.com/docs/frameworks/full-stack/nuxt). Você pode executar localmente para testes rodando o build e preview.

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

E depois:

```bash
node .output/server/index.mjs
```

## Documentação

Visite a [documentação oficial do Nuxt 3](https://nuxt.com/docs) para mais informações.
