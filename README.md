# RX Som e Iluminação e Painel de LED — site

Site institucional da RX (Palmital-SP e região), feito em **React + Vite** a partir do design aprovado no Claude Design.

- Identidade **preto + dourado**, com cores tiradas do logotipo
- **Tema escuro e tema claro**: o site abre no escuro, e o botão ☀/☾ no cabeçalho alterna entre os dois. A escolha fica salva no navegador.
- 10 seções: cabeçalho, hero, sobre, serviços, estrutura e equipamentos, portfólio, diferenciais, Instagram, orçamento e rodapé
- Animações: feixes de luz no hero, equalizador pulsando, seções que aparecem ao rolar, brilho nos botões e zoom nas fotos. Todas param quando o sistema pede "reduzir movimento".
- Responsivo: menu mobile, carrossel de serviços, barra fixa "Orçamento pelo WhatsApp" no celular
- Formulário de orçamento que abre o WhatsApp com a mensagem já preenchida

## Rodar no computador

Requer Node.js 18 ou mais recente.

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
npm run preview  # testa o build
```

## Antes de publicar: preencher os dados

Todo o conteúdo fica em **`src/data/content.js`**. Os textos entre `[colchetes]` precisam dos dados reais:

| O quê | Onde |
|---|---|
| Número do WhatsApp (só dígitos, com 55 + DDD) | `contact.whatsapp` |
| Telefone como aparece no site | `contact.whatsappLabel` |
| Perfil do Instagram (sem @) | `contact.instagram` |
| E-mail | `contact.email` |
| História da RX | `about.paragraphs` |
| Marcas e modelos dos equipamentos | `equipment[].items` |
| Eventos do portfólio (nome, cidade, ano) | `portfolio` |

Enquanto o WhatsApp não for preenchido, os botões levam ao formulário e o formulário avisa que falta configurar o número.

## Fotos

Enquanto não há fotos reais, o site mostra uma arte de palco (feixes de luz e silhuetas) com uma etiqueta dizendo qual foto vai em cada lugar.

1. Coloque as fotos em `public/fotos/` (por exemplo `public/fotos/casamento-1.jpg`)
2. Em `src/data/content.js`, preencha o campo `image` correspondente: `image: '/fotos/casamento-1.jpg'`

Dica: use fotos horizontais de pelo menos 1600px de largura no hero e comprima tudo (por exemplo, no squoosh.app) antes de subir.

## Logotipo

`public/logo-rx.png` é o arquivo original da marca, só sem as margens brancas. No tema escuro ele fica numa placa marfim, porque o "RX" é preto. No tema claro ele aparece direto. Se houver uma versão negativa (RX branco, fundo transparente), ela pode substituir a placa no tema escuro.

## Estrutura

```
src/
  data/content.js        ← textos, contatos e fotos
  styles/global.css      ← cores dos dois temas, tipografia, botões, animações
  hooks/useTheme.js      ← tema claro/escuro
  utils/links.js         ← links de WhatsApp e Instagram
  components/            ← uma pasta por seção (JSX + CSS)
```

## Publicar

O build é estático, então funciona na Vercel, na Netlify ou em qualquer hospedagem. Na Vercel, basta importar este repositório: ela reconhece o Vite sozinha (build `npm run build`, saída `dist`).
