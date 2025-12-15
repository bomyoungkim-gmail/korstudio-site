# 🚀 Início Rápido - Studio Kor

## Status Atual
✅ Servidor rodando em: **http://localhost:5173**

## Primeiros Passos

### 1.Abrir o Site
- Acesse `http://localhost:5173` no navegador
- O site já está funcionando com todas as seções

### 2. Configurar O Formulário de Contato
📌 **AÇÃO NECESSÁRIA:**

1. Crie conta em: https://formspree.io
2. Crie um novo formulário
3. Copie o Form ID (ex: `xeqypzqy`)
4. Edite: `src/components/Contact.jsx` (linha 6)
5. Troque `'YOUR_FORM_ID'` pelo seu ID

### 3. Deploy na Vercel

**Opção A - UI (Mais fácil)**:
1. Acesse: https://vercel.com
2. Login com GitHub
3. "Add New" → "Project"
4. Importe este repositório
5. Deploy automático!

**Opção B - CLI**:
```bash
npm install -g vercel
vercel --prod
```

## Arquivos Importantes

- **README.md** - Documentação completa
- **walkthrough.md** - Guia detalhado
- **src/components/Contact.jsx** - Configurar Formspree aqui
- **tailwind.config.js** - Personalizar cores
- **public/documents/** - PDFs para download

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build produção
npm run build

# Preview do build
npm run preview

# Parar servidor
Ctrl+C
```

## ✅ Checklist Pré-Deploy

- [ ] Configurar Formspree Form ID
- [ ] Substituir PDFs (se tiver reais)
- [ ] Atualizar número do WhatsApp (Footer.jsx)
- [ ] Revisar informações de contato
- [ ] Testar formulário
- [ ] Build de produção (`npm run build`)
- [ ] Deploy na Vercel

## 📞 Contatos no Site (Atualizar se necessário)

Estão em `src/components/Contact.jsx` e `src/components/Footer.jsx`:
- Telefone: (11) 3456-7890
- WhatsApp: (11) 98765-4321
- Email: contato@studiokor.com.br
- Endereço: Rua das Madeiras, 123 - São Paulo, SP

---

**Tudo pronto para uso! 🎉**
