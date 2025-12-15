import { useForm, ValidationError } from '@formspree/react';
import { Button } from './ui/Button';

export const Contact = () => {
  // Substitua 'YOUR_FORM_ID' pelo seu ID do Formspree (ex: 'xeqypzqy')
  const [state, handleSubmit] = useForm('YOUR_FORM_ID');

  if (state.succeeded) {
    return (
      <section id="contato" className="py-20 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-12 shadow-lg">
            <h2 className="font-serif text-3xl mb-4">Mensagem enviada com sucesso!</h2>
            <p className="text-brand-gray mb-6">
              Obrigado pelo contato. Nossa equipe retornará em breve.
            </p>
            <Button onClick={() => window.location.reload()}>
              Enviar nova mensagem
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-4">
          Contato / Onde Encontrar
        </h2>
        <p className="text-lg text-brand-gray text-center mb-12">
          Entre em contato para orçamentos, dúvidas técnicas ou para conhecer nossos produtos.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold text-brand-dark mb-2">
              Nome completo *
            </label>
            <input
              id="nome"
              type="text"
              name="nome"
              required
              className="w-full px-4 py-3 border-2 border-brand-border rounded focus:border-brand-brown focus:outline-none transition-colors"
            />
            <ValidationError prefix="Nome" field="nome" errors={state.errors} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="empresa" className="block text-sm font-semibold text-brand-dark mb-2">
                Empresa
              </label>
              <input
                id="empresa"
                type="text"
                name="empresa"
                className="w-full px-4 py-3 border-2 border-brand-border rounded focus:border-brand-brown focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                E-mail *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-brand-border rounded focus:border-brand-brown focus:outline-none transition-colors"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefone" className="block text-sm font-semibold text-brand-dark mb-2">
                Telefone / WhatsApp *
              </label>
              <input
                id="telefone"
                type="tel"
                name="telefone"
                required
                className="w-full px-4 py-3 border-2 border-brand-border rounded focus:border-brand-brown focus:outline-none transition-colors"
              />
              <ValidationError prefix="Telefone" field="telefone" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="cidade" className="block text-sm font-semibold text-brand-dark mb-2">
                Cidade / Estado *
              </label>
              <input
                id="cidade"
                type="text"
                name="cidade"
                required
                placeholder="Ex: São Paulo, SP"
                className="w-full px-4 py-3 border-2 border-brand-border rounded focus:border-brand-brown focus:outline-none transition-colors"
              />
              <ValidationError prefix="Cidade" field="cidade" errors={state.errors} />
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-semibold text-brand-dark mb-2">
              Conte um pouco sobre seu projeto ou necessidade de painéis *
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows="6"
              className="w-full px-4 py-3 border-2 border-brand-border rounded focus:border-brand-brown focus:outline-none transition-colors resize-y"
            ></textarea>
            <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors} />
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={state.submitting}
          >
            {state.submitting ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
        </form>

        <div className="text-center space-y-4 pb-12">
          <h3 className="font-serif text-2xl mb-4">Outras formas de contato</h3>
          <p className="text-brand-gray"><strong>Telefone:</strong> (11) 3456-7890</p>
          <p className="text-brand-gray"><strong>WhatsApp:</strong> (11) 98765-4321</p>
          <p className="text-brand-gray"><strong>E-mail:</strong> contato@studiokor.com.br</p>
          <p className="text-brand-gray"><strong>Endereço:</strong> Rua das Madeiras, 123 - São Paulo, SP</p>
          
          <div className="pt-8">
            <h4 className="font-semibold text-lg mb-2">Revendas e Representantes</h4>
            <p className="text-brand-gray">
              Possuímos parceiros e revendas em diversas regiões do Brasil. Entre em contato para encontrar o representante mais próximo de você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
