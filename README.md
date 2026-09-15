# Tesoura Dourada — Site

Protótipo de código do site da Tesoura Dourada: catálogo B2B de uniformes
personalizados + vitrine institucional + blog, com CTA para WhatsApp.

Esta entrega contém a **Home completa**, já no design final (paleta neutros +
preto + dourado, tipografia Fraunces/Inter) e com o assistente **"Encontre o
Uniforme Ideal"** funcionando. Catálogo, página de produto e blog entram nos
próximos passos, reaproveitando os mesmos componentes.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) para ícones

Todos os dados (produtos, categorias, posts do blog) estão mockados em
`lib/data.ts` — dá pra editar direto ali por enquanto, sem precisar de banco
de dados.

## Pré-requisitos

1. **Node.js versão 20 ou mais recente** — baixe em [nodejs.org](https://nodejs.org)
   (escolha a versão "LTS"). Para conferir se já tem: abra o terminal e rode
   `node --version`.


##  Instalar as dependências e rodar

Dentro do terminal que você abriu no passo anterior, rode:

```bash
npm install
```

Isso baixa tudo que o projeto precisa (Next.js, React, Tailwind etc.) — só
funciona com internet e pode levar um ou dois minutos na primeira vez.

Depois, para ver o site rodando:

```bash
npm run build #se rodar sem erros 
npm run start
```

O terminal vai mostrar um endereço, normalmente `http://localhost:3000`.
Abra esse link no navegador — é o site rodando de verdade na sua máquina.
Qualquer alteração que você fizer nos arquivos aparece automaticamente ali,
sem precisar reiniciar nada.

Para parar o servidor, volte ao terminal e aperte `Ctrl+C`.

## Subir para o GitHub

**Passo A — criar o repositório vazio no site do GitHub:**

1. Entre em [github.com/new](https://github.com/new).
2. Dê um nome ao repositório, por exemplo `tesoura-dourada`.
3. Deixe como **Private** se ainda não quiser tornar público.
4. **Não** marque as opções de criar README, .gitignore ou licença — o
   projeto já vem com esses arquivos.
5. Clique em **Create repository**. O GitHub vai te mostrar uma URL parecida
   com `https://github.com/seu-usuario/tesoura-dourada.git` — copie ela.

**Passo B — enviar o projeto, pelo terminal do VS Code:**

```bash
git init
git add .
git commit -m "Primeiro commit: prototipo da Home"
git branch -M main
git remote add origin COLE_AQUI_A_URL_QUE_VOCE_COPIOU
git push -u origin main
```

Se o Git pedir login, ele vai abrir uma janela do navegador para você
autorizar com sua conta do GitHub — é só seguir o fluxo.

Pronto: atualize a página do repositório no GitHub e os arquivos vão
aparecer lá.

> **Alternativa sem terminal:** o VS Code tem um ícone de "Source Control"
> na barra lateral esquerda (parece um garfo/ramo). Depois do `git init` no
> terminal, você pode usar esse painel para revisar mudanças, escrever a
> mensagem de commit e clicar em "Commit" e depois "Publish Branch" — sem
> digitar mais comandos.

## Estrutura do projeto

```
tesoura-dourada/
├── app/
│   ├── layout.tsx      → estrutura raiz + fontes (Fraunces/Inter)
│   ├── page.tsx        → monta a Home juntando todas as seções
│   └── globals.css     → cores e tokens da marca (edite aqui a paleta)
├── components/
│   ├── header.tsx, hero.tsx, categories.tsx, ...  → uma seção por arquivo
│   ├── assistant-modal.tsx  → o assistente "Encontre o Uniforme Ideal"
│   └── ui/              → botões, logo, título de seção (peças reutilizáveis)
├── lib/
│   ├── data.ts          → produtos, categorias, cases, posts do blog (mock)
│   └── whatsapp.ts       → número de WhatsApp e o link com mensagem pronta
└── public/              → coloque aqui as fotos reais dos produtos
```

## Pendências antes de ir para produção

- [ ] **Fotos reais dos produtos** — hoje os cards usam blocos de cor no
      lugar de fotos. Assim que tiver as imagens, troque em
      `components/featured-products.tsx`.
- [ ] **Ano de fundação** — o rodapé usa "há mais de duas décadas" porque o
      material recebido tem duas datas diferentes (2002 no portfólio, 1995
      na apresentação comercial). Confirme com a Tesoura Dourada antes de
      colocar um ano exato em qualquer lugar do site.
- [ ] **Preços e produtos** em `lib/data.ts` são ilustrativos.
- [ ] **Número do WhatsApp**: confirme se `(41) 99552-3092` é o número que
      deve continuar recebendo os contatos do site (está em `lib/whatsapp.ts`).
- [ ] Próximas páginas: Catálogo com filtros, Produto individual e Blog.
- [ ] Banco de dados real (Supabase é a recomendação) para o catálogo e o
      futuro painel administrativo.

