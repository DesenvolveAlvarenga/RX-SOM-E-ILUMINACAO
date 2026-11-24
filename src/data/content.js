/* =========================================================
   CONTEÚDO DO SITE — edite aqui textos, contatos e fotos.
   Tudo que está entre [colchetes] precisa ser preenchido
   com os dados reais da RX.

   Fotos: coloque os arquivos em /public/fotos/ e preencha o
   campo `image` com o caminho, ex.: '/fotos/casamento-1.jpg'.
   Enquanto `image` for null, o site mostra a arte de palco.
   ========================================================= */

export const contact = {
  // Número com DDI + DDD, só dígitos. Ex.: 5514999998888
  whatsapp: '55[DDD][NUMERO]',
  whatsappLabel: '[(14) 00000-0000]',
  instagram: '[seu_instagram]',
  email: '[contato@seudominio.com.br]',
  region: 'Palmital-SP e região',
};

export const nav = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'estrutura', label: 'Estrutura' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'instagram', label: 'Instagram' },
];

export const eventTypes = ['Casamentos', '15 anos', 'Shows e bandas', 'Corporativo', 'Happy hour', 'Eventos solidários'];

export const hero = {
  image: null, // ex.: '/fotos/hero-palco.jpg'
  imageLabel: 'Foto real · palco iluminado RX',
};

export const about = {
  images: [
    { image: null, label: 'Foto · montagem de palco', variant: 'cool' },
    { image: null, label: 'Foto · equipe em ação', variant: 'amber' },
  ],
  paragraphs: [
    'A RX Som e Iluminação e Painel de LED é de Palmital-SP e atende toda a região com estrutura completa para eventos. [Conte aqui a história da RX: quando começou, quem está à frente e como a empresa cresceu.]',
    'Do primeiro contato à desmontagem, nossa equipe planeja o som, a luz e o LED de acordo com o espaço, o público e o clima que você quer criar.',
  ],
  pillars: [
    { title: 'Planejamento', text: 'Projeto técnico pensado para o seu local e roteiro.' },
    { title: 'Montagem', text: 'Estrutura instalada e testada antes dos convidados.' },
    { title: 'Ao vivo', text: 'Operação técnica durante todo o evento.' },
  ],
};

export const services = [
  {
    id: 'som',
    icon: 'speaker',
    title: 'Sonorização',
    short: 'som',
    variant: 'cool',
    image: null,
    imageLabel: 'Foto · sistema de som',
    text: 'Sistemas de som dimensionados para o espaço — da cerimônia intimista ao show ao ar livre.',
    items: ['Cerimônia e recepção', 'Shows e bandas ao vivo', 'Microfones e monitoração', 'Técnico de som no evento'],
  },
  {
    id: 'luz',
    icon: 'light',
    title: 'Iluminação',
    short: 'iluminação',
    variant: 'stage',
    image: null,
    imageLabel: 'Foto · pista iluminada',
    text: 'Iluminação cênica que cria clima, valoriza a decoração e transforma a pista em espetáculo.',
    items: ['Iluminação de pista e palco', 'Moving heads e efeitos', 'Ambientação da decoração', 'Fumaça e efeitos especiais'],
  },
  {
    id: 'led',
    icon: 'led',
    title: 'Painel de LED',
    short: 'painel de LED',
    variant: 'led',
    image: null,
    imageLabel: 'Foto · painel de LED',
    text: 'Painéis de LED para vídeos, homenagens, transmissões e identidade visual do seu evento.',
    items: ['Telão para cerimônia', 'Vídeos e homenagens', 'Palestras e corporativo', 'Operação de vídeo'],
  },
];

export const equipment = [
  {
    id: 'som',
    label: 'Som',
    variant: 'cool',
    image: null,
    imageLabel: 'Foto · caixas e mesa de som',
    items: [
      ['Sistema de PA / line array', '[Marca / modelo]'],
      ['Subwoofers', '[Marca / modelo]'],
      ['Monitores de palco', '[Marca / modelo]'],
      ['Mesa de som digital', '[Marca / modelo]'],
      ['Microfones com e sem fio', '[Marca / modelo]'],
      ['Som para cerimônia', '[Marca / modelo]'],
    ],
  },
  {
    id: 'luz',
    label: 'Iluminação',
    variant: 'stage',
    image: null,
    imageLabel: 'Foto · moving heads em ação',
    items: [
      ['Moving heads', '[Quantidade / modelo]'],
      ['Refletores PAR LED', '[Quantidade / modelo]'],
      ['Ribaltas e luz de ambientação', '[Quantidade / modelo]'],
      ['Mesa de iluminação', '[Marca / modelo]'],
      ['Máquina de fumaça / haze', '[Marca / modelo]'],
      ['Treliças e estruturas', '[Medidas disponíveis]'],
    ],
  },
  {
    id: 'led',
    label: 'Painel de LED',
    variant: 'led',
    image: null,
    imageLabel: 'Foto · painel de LED montado',
    items: [
      ['Painel de LED', '[Tamanho em m² / pitch]'],
      ['Processadora de vídeo', '[Marca / modelo]'],
      ['Estrutura de fixação', '[Medidas disponíveis]'],
      ['Operação de conteúdo', 'Ao vivo no evento'],
      ['Vídeos e homenagens', 'Exibição no telão'],
      ['Transmissão / câmera', '[Se disponível]'],
    ],
  },
];

export const portfolioFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'casamentos', label: 'Casamentos' },
  { id: 'quinze', label: '15 anos' },
  { id: 'shows', label: 'Shows' },
  { id: 'corporativo', label: 'Corporativo' },
];

// rows/cols: tamanho do bloco na grade (1 ou 2)
export const portfolio = [
  { cat: 'casamentos', tag: 'Casamento', title: '[Nome do casal]', meta: '[Cidade] · [Ano]', variant: 'stage', image: null, rows: 2, cols: 2 },
  { cat: 'quinze', tag: '15 anos', title: '[Nome da debutante]', meta: '[Cidade] · [Ano]', variant: 'amber', image: null, rows: 1, cols: 1 },
  { cat: 'shows', tag: 'Show', title: '[Nome da banda]', meta: '[Cidade] · [Ano]', variant: 'cool', image: null, rows: 2, cols: 1 },
  { cat: 'corporativo', tag: 'Corporativo', title: '[Nome do evento]', meta: '[Empresa] · [Ano]', variant: 'led', image: null, rows: 1, cols: 1 },
  { cat: 'casamentos', tag: 'Casamento', title: '[Nome do casal]', meta: '[Cidade] · [Ano]', variant: 'cool', image: null, rows: 1, cols: 1 },
  { cat: 'quinze', tag: '15 anos', title: '[Nome da debutante]', meta: '[Cidade] · [Ano]', variant: 'stage', image: null, rows: 1, cols: 2 },
  { cat: 'shows', tag: 'Happy hour', title: '[Nome do evento]', meta: '[Local] · [Ano]', variant: 'amber', image: null, rows: 1, cols: 1 },
];

export const differentials = [
  { title: 'Solução completa', text: 'Som, iluminação e painel de LED com uma só equipe e um só contato.' },
  { title: 'Projeto sob medida', text: 'Estrutura pensada para o seu espaço, número de convidados e roteiro.' },
  { title: 'Pontualidade na montagem', text: 'Tudo instalado e testado antes da chegada dos convidados.' },
  { title: 'Técnico durante o evento', text: 'Operação ao vivo do início ao fim, sem você se preocupar.' },
  { title: 'Atendimento próximo', text: 'Conversa direta pelo WhatsApp, do orçamento ao pós-evento.' },
  { title: 'Palmital e região', text: 'Equipe local que conhece os espaços de eventos da região.' },
];

// Fotos do grid do Instagram (6). `url` = link da publicação.
export const instagramPosts = [
  { image: null, url: null, variant: 'stage' },
  { image: null, url: null, variant: 'amber' },
  { image: null, url: null, variant: 'cool' },
  { image: null, url: null, variant: 'led' },
  { image: null, url: null, variant: 'stage' },
  { image: null, url: null, variant: 'cool' },
];

export const eventOptions = ['Casamento', '15 anos', 'Show / banda', 'Corporativo', 'Happy hour', 'Evento solidário', 'Outro'];
