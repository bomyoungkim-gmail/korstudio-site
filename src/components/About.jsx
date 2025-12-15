import { ArrowRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-32 lg:py-48 bg-brand-white border-t border-black/5">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-32">
        <div>
          <h2 className="font-serif text-4xl lg:text-6xl text-brand-black mb-8 leading-tight">
            Sobre o <br/> Studio
          </h2>
          <div className="w-24 h-[1px] bg-black/10 mb-8"></div>
          <p className="font-sans text-sm font-light text-brand-gray leading-relaxed mb-6 tracking-wide max-w-md">
            Fundado em 2018, o Studio Kor nasceu da paixão pela madeira e pelo design. Nossa missão é transformar ambientes através de painéis que unem estética refinada e funcionalidade.
          </p>
          <p className="font-sans text-sm font-light text-brand-gray leading-relaxed tracking-wide max-w-md">
            Com fabricação própria e equipe especializada, controlamos cada etapa do processo – da seleção da lâmina à instalação final – garantindo um padrão de qualidade que se tornou referência no mercado de alto padrão.
          </p>
        </div>

        <div className="space-y-12 pt-8">
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] mb-4">Essência</h3>
            <p className="font-serif text-2xl text-brand-black">Excelência em cada detalhe, respeito à matéria-prima e compromisso com o design atemporal.</p>
          </div>
          
          <div>
             <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] mb-4">Visão</h3>
            <p className="font-serif text-2xl text-brand-black">Ser a principal referência em revestimentos de madeira natural para a arquitetura brasileira.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
