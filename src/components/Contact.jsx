import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID"); 
  
  if (state.succeeded) {
      return (
          <section id="contato" className="py-32 bg-brand-white flex items-center justify-center">
              <div className="text-center">
                  <h2 className="font-serif text-4xl mb-4">Mensagem Enviada</h2>
                  <p className="font-sans font-light text-brand-gray">Obrigado pelo contato. Retornaremos em breve.</p>
                  <button onClick={() => window.location.reload()} className="mt-8 text-xs uppercase tracking-widest border-b border-black pb-1">Voltar</button>
              </div>
          </section>
      );
  }

  return (
    <section id="contato" className="py-32 lg:py-48 bg-brand-white">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Contact Info */}
        <div>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gray mb-8 block">Contato</span>
          <h2 className="font-serif text-4xl lg:text-6xl text-brand-black mb-12 leading-tight">
            Vamos iniciar <br/> seu projeto
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-widest mb-2 text-brand-gray">E-mail</h3>
              <a href="mailto:contato@studiokor.com.br" className="font-serif text-2xl text-brand-black hover:opacity-50 transition-opacity">contato@studiokor.com.br</a>
            </div>

            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-widest mb-2 text-brand-gray">Telefone / WhatsApp</h3>
              <a href="https://wa.me/5511999999999" className="font-serif text-2xl text-brand-black hover:opacity-50 transition-opacity">+55 11 99999-9999</a>
            </div>

            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-widest mb-2 text-brand-gray">Studio</h3>
              <p className="font-serif text-xl text-brand-black leading-relaxed">
                Av. Europa, 123 <br/>
                Jardim Europa, São Paulo - SP
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="group relative">
                <input
                  id="name"
                  type="text" 
                  name="name"
                  required
                  placeholder=" "
                  className="block w-full border-b border-black/20 py-4 bg-transparent text-lg focus:outline-none focus:border-brand-black transition-colors peer"
                />
                <label htmlFor="name" className="absolute left-0 top-4 text-brand-gray pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-black peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Nome Completo
                </label>
                <ValidationError prefix="Nome" field="name" errors={state.errors} />
            </div>

            <div className="group relative">
                <input
                  id="email"
                  type="email" 
                  name="email"
                  required
                  placeholder=" "
                  className="block w-full border-b border-black/20 py-4 bg-transparent text-lg focus:outline-none focus:border-brand-black transition-colors peer"
                />
                <label htmlFor="email" className="absolute left-0 top-4 text-brand-gray pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-black peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  E-mail Corporativo
                </label>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

             <div className="group relative">
                <input
                  id="phone"
                  type="tel" 
                  name="phone"
                  placeholder=" "
                  className="block w-full border-b border-black/20 py-4 bg-transparent text-lg focus:outline-none focus:border-brand-black transition-colors peer"
                />
                <label htmlFor="phone" className="absolute left-0 top-4 text-brand-gray pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-black peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Telefone
                </label>
            </div>

             <div className="group relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder=" "
                  className="block w-full border-b border-black/20 py-4 bg-transparent text-lg focus:outline-none focus:border-brand-black transition-colors peer resize-none"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-brand-gray pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-black peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Detalhes do Projeto
                </label>
                 <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="pt-8">
               <button type="submit" disabled={state.submitting} className="group flex items-center gap-4 text-xs font-sans uppercase tracking-[0.2em] border-b border-black pb-2 hover:opacity-50 transition-opacity">
                Enviar Mensagem
                <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
