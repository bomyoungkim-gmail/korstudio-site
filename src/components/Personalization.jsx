import { Sliders, Cpu, Droplet } from 'lucide-react';

export const Personalization = () => {
  return (
    <section id="personalizacao" className="py-32 lg:py-48 bg-brand-white border-b border-black/5">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-32">
        <div>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gray mb-8 block">Processo Criativo</span>
          <h2 className="font-serif text-4xl lg:text-6xl text-brand-black mb-8 leading-tight">
            Personalização <br/> <span className="italic font-light">&</span> Tecnologia
          </h2>
          <p className="font-sans text-sm font-light text-brand-gray leading-relaxed max-w-md tracking-wide">
            Unimos a precisão da tecnologia alemã com o cuidado artesanal no acabamento. Cada painel é tratado como uma peça única.
          </p>
        </div>

        <div className="space-y-16">
          <div className="group">
            <Sliders className="w-6 h-6 text-brand-black mb-4 opacity-50" />
            <h3 className="font-serif text-2xl mb-2">Dimensões Sob Medida</h3>
            <p className="text-sm font-light text-brand-gray leading-relaxed">Painéis cortados milimetricamente de acordo com o projeto, eliminando desperdícios e garantindo encaixe perfeito.</p>
          </div>

          <div className="group">
            <Cpu className="w-6 h-6 text-brand-black mb-4 opacity-50" />
            <h3 className="font-serif text-2xl mb-2">Usinagem CNC</h3>
            <p className="text-sm font-light text-brand-gray leading-relaxed">Tecnologia de ponta para criar texturas, ripados e desenhos complexos com precisão absoluta.</p>
          </div>

          <div className="group">
            <Droplet className="w-6 h-6 text-brand-black mb-4 opacity-50" />
            <h3 className="font-serif text-2xl mb-2">Acabamentos Premium</h3>
            <p className="text-sm font-light text-brand-gray leading-relaxed">Vernizes de alta resistência, óleos naturais europeus ou laca com toque de seda. Proteção e beleza.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
