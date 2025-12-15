import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-14 lg:pt-16 flex flex-col justify-center bg-brand-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:h-[80vh]">
        
        {/* Typography Content */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center z-10">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gray mb-8 block ml-1">
            Painéis de Madeira Personalizados
          </span>
          <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] text-brand-black mb-12">
            Arquitetura <br/>
            <span className="italic font-normal">&</span> Matéria
          </h1>
          <p className="font-sans text-xs md:text-sm font-light text-brand-gray max-w-sm leading-relaxed tracking-wide ml-1 border-l border-black/10 pl-6">
            Desenvolvemos superfícies em madeira natural para projetos que exigem excelência, precisão e sofisticação.
          </p>
        </div>
        
        {/* Editorial Image */}
        <div className="lg:col-span-7 order-1 lg:order-2 h-[50vh] lg:h-[75vh] relative">
          <div className="absolute inset-0 bg-[#E8E6E1]">
            <img 
              src="/assets/hero_ambiente.png" 
              alt="Ambiente Studio Kor"
              className="w-full h-full object-cover grayscale-[20%] contrast-[0.95]"
            />
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
        <span className="text-[9px] tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="w-3 h-3" />
      </div>
    </section>
  );
};
