# Studio Kor - Site Institucional

Site institucional moderno e elegante para empresa de painéis de madeira personalizados, construído com **React**, **Tailwind CSS** e **Vite**.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **Tailwind CSS v3.4** - Estilização (v3 recomendada para estabilidade)
- **Vite** - Build tool e dev server
- **Framer Motion** - Animações
- **Formspree** - Formulário de contato
- **Lucide React** - Ícones

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🛠️ Instalação e Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

O site estará disponível em `http://localhost:5173`

## 📮 Configuração do Formulário de Contato

O formulário usa **Formspree**. Para ativar:

1. Acesse [formspree.io](https://formspree.io) e crie uma conta
2. Crie um novo formulário
3. Copie o Form ID fornecido (ex: `xeqypzqy`)
4. Abra `src/components/Contact.jsx`
5. Substitua `'YOUR_FORM_ID'` pelo seu Form ID real

```javascript
const [state, handleSubmit] = useForm('SEU_FORM_ID_AQUI');
```

## 🌐 Deploy na Vercel

### Opção 1: Deploy via Interface Web

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New" → "Project"
3. Importe este repositório do GitHub
4. A Vercel detectará automaticamente as configurações do Vite
5. Clique em "Deploy"

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Variáveis de Ambiente (opcional)

Se quiser adicionar variáveis de ambiente:

1. No painel da Vercel, vá em "Settings" → "Environment Variables"
2. Adicione as variáveis necessárias
3. Redesploy o projeto

## 📁 Estrutura do Projeto

```
korstudio-site/
├── public/
│   ├── assets/          # Imagens dos painéis e ambientes
│   └── documents/       # PDFs para download
├── src/
│   ├── components/
│   │   ├── ui/         # Componentes reutilizáveis (Button, Modal)
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Collections.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Personalização

### Cores

As cores da marca estão configuradas no `tailwind.config.js`:

```javascript
colors: {
  'brand-bg': '#FAF8F5',
  'brand-brown': '#8B6F47',
  'brand-dark': '#2A2A2A',
  // ...
}
```

### Fontes

As fontes Google (Playfair Display e Inter) estão importadas no `index.html`.

## 📦 Build e Otimização

O Vite otimiza automaticamente:
- Code splitting
- Minificação
- Tree shaking
- Otimização de assets

Para build de produção:
```bash
npm run build
```

Os arquivos otimizados estarão em `/dist`.

## 📞 Contato

**Studio Kor**  
Email: contato@studiokor.com.br  
Telefone: (11) 3456-7890  
WhatsApp: (11) 98765-4321

---

Desenvolvido com ♥ para Studio Kor
