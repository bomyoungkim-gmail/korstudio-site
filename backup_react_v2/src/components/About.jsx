import { Sparkles, Target, Eye } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-bg-alt">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-6">
          Sobre a Studio Kor
        </h2>
        <p className="text-xl text-center text-brand-gray mb-12">
          Há mais de 15 anos desenvolvendo painéis de madeira personalizados para projetos que exigem excelência.
        </p>

        <div className="prose prose-lg max-w-none text-brand-gray mb-12 space-y-6">
          <p>
            A <strong className="text-brand-dark">Studio Kor</strong> nasceu da paixão por transformar madeira em elementos arquitetônicos únicos. Desde o início, nosso foco tem sido oferecer painéis de alto padrão, fabricados sob medida, que atendam às necessidades específicas de cada projeto — seja residencial, corporativo ou comercial.
          </p>
          <p>
            Trabalhamos diretamente com <strong className="text-brand-dark">arquitetos, designers de interiores, marcenarias e construtoras</strong>, oferecendo não apenas um produto de qualidade superior, mas também <strong className="text-brand-dark">suporte técnico completo</strong> em todas as etapas: desde o desenho inicial até a instalação final.
          </p>
          <p>
            Nossa produção combina <strong className="text-brand-dark">tecnologia de ponta</strong> — com equipamentos CNC de alta precisão — e <strong className="text-brand-dark">acabamento manual</strong> refinado, garantindo que cada painel saia da fábrica com a qualidade que o seu projeto merece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="w-12 h-12 mx-auto mb-4 text-brand-brown" />
            <h4 className="font-serif text-xl mb-3">Missão</h4>
            <p className="text-brand-gray text-sm">
              Fornecer painéis de madeira personalizados de altíssima qualidade, com prazos confiáveis e suporte técnico especializado.
            </p>
          </div>
          <div className="text-center p-6">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-brand-brown" />
            <h4 className="font-serif text-xl mb-3">Valores</h4>
            <p className="text-brand-gray text-sm">
              Excelência, compromisso com prazos, sustentabilidade e parceria de longo prazo com nossos clientes.
            </p>
          </div>
          <div className="text-center p-6">
            <Eye className="w-12 h-12 mx-auto mb-4 text-brand-brown" />
            <h4 className="font-serif text-xl mb-3">Visão</h4>
            <p className="text-brand-gray text-sm">
              Ser referência nacional em painéis de madeira para arquitetura de alto padrão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
