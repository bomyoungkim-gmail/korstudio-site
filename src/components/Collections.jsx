import { useState } from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { ArrowRight, Plus } from 'lucide-react';

const collectionsData = [
  {
    id: 'naturale',
    title: 'Naturale',
    subtitle: 'A Essência da Matéria',
    image: `${import.meta.env.BASE_URL}assets/naturale_panel_1765423205582.png`,
    description: 'Veios autênticos e texturas orgânicas preservadas em sua essência.',
    fullDescription: 'Painéis com lâminas naturais autênticas que preservam os veios e características únicas da madeira.',
    specs: [
      'Lâminas: Nogueira, Freijó, Tauari, Carvalho',
      'Espessuras disponíveis: 15mm, 18mm, 25mm',
      'Substrato: MDF ou compensado',
      'Acabamento: Verniz UV, laca ou óleo natural',
      'Dimensões: Sob medida até 2800 x 1220mm'
    ],
    applications: 'Ideal para ambientes residenciais, lobbies de hotéis, espaços de convivência que buscam aconchego e conexão com a natureza.'
  },
  {
    id: 'urbano',
    title: 'Urbano',
    subtitle: 'Minimalismo Metropolitano',
    image: `${import.meta.env.BASE_URL}assets/urbano_panel_1765423219892.png`,
    description: 'Linhas precisas e tonalidades sóbrias para a arquitetura contemporânea.',
    fullDescription: 'Texturas lineares e contemporâneas desenvolvidas para projetos corporativos e comerciais modernos.',
    specs: [
      'Textura: Linear sutil e uniforme',
      'Espessuras disponíveis: 15mm, 18mm',
      'Substrato: MDF de alta densidade',
      'Acabamento: Laca acetinada ou fosca',
      'Dimensões: Sob medida até 2750 x 1220mm'
    ],
    applications: 'Perfeito para escritórios, salas de reunião, recepções corporativas e ambientes que exigem sofisticação discreta.'
  },
  {
    id: 'minimal',
    title: 'Minimal',
    subtitle: 'Pureza da Forma',
    image: `${import.meta.env.BASE_URL}assets/minimal_panel_1765423234819.png`,
    description: 'Superfícies monolíticas e acabamentos perfeitos. O silêncio visual.',
    fullDescription: 'Superfícies extremamente lisas com tonalidades neutras, essenciais para projetos minimalistas.',
    specs: [
      'Acabamento: Ultra liso, sem veios aparentes',
      'Espessuras disponíveis: 15mm, 18mm, 25mm',
      'Substrato: MDF de alta qualidade',
      'Cores: Bege claro, cinza, off-white',
      'Dimensões: Sob medida até 2800 x 1220mm'
    ],
    applications: 'Ideal para projetos minimalistas, galerias de arte, espaços clean e contemporâneos de alta elegância.'
  },
  {
    id: 'especiais',
    title: 'Especiais',
    subtitle: 'Alfaiataria em Madeira',
    image: `${import.meta.env.BASE_URL}assets/especiais_panel_1765423249036.png`,
    description: 'Usinagens complexas e desenhos exclusivos. O limite é a criatividade.',
    fullDescription: 'Painéis com usinagens customizadas: ripados, canaletas, frisos e desenhos exclusivos.',
    specs: [
      'Usinagens: Ripado vertical/horizontal, canaletas, frisos',
      'Espessuras: Sob medida conforme projeto',
      'Portas camufladas e nichos integrados',
      'Desenhos exclusivos desenvolvidos para cada projeto',
      'Dimensões: Totalmente personalizadas'
    ],
    applications: 'Projetos customizados que demandam soluções únicas, fachadas, divisórias especiais e elementos arquitetônicos marcantes.'
  }
];

export const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);

  return (
    <>
      <section id="colecoes" className="py-32 lg:py-48 bg-brand-white">
        <div className="max-w-[1800px] mx-auto px-4 lg:px-16">
          <div className="mb-24 lg:mb-32 pl-4 border-l border-black/10">
            <h2 className="font-serif text-4xl lg:text-6xl text-brand-black mb-4">
              Coleções
            </h2>
            <p className="font-sans text-sm tracking-widest uppercase text-brand-gray">
              Edição 2025
            </p>
          </div>

          <div className="space-y-32 lg:space-y-48">
            {collectionsData.map((collection, index) => (
              <article
                key={collection.id}
                className={`group grid lg:grid-cols-12 gap-8 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                onClick={() => setSelectedCollection(collection)}
              >
                {/* Image Side */}
                <div className={`lg:col-span-7 h-[60vh] lg:h-[80vh] overflow-hidden relative cursor-pointer ${index % 2 === 1 ? 'lg:order-last' : 'lg:order-first'}`}>
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:text-right items-end' : 'lg:text-left items-start'}`}>
                  <div className="flex items-center gap-4 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="h-[1px] w-12 bg-black/20"></span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-gray">0{index + 1}</span>
                  </div>
                  
                  <h3 className="font-serif text-5xl lg:text-7xl mb-4 group-hover:text-brand-black transition-colors">
                    {collection.title}
                  </h3>
                  <p className="font-serif italic text-xl text-brand-gray mb-8">
                    {collection.subtitle}
                  </p>
                  <p className="font-sans text-sm font-light text-brand-gray mb-12 max-w-sm leading-relaxed tracking-wide">
                    {collection.description}
                  </p>
                  
                  <button className="flex items-center gap-4 group/btn pb-1 border-b border-black/20 hover:border-brand-black transition-all">
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em]">Ver Detalhes</span>
                    <Plus className="w-3 h-3 group-hover/btn:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedCollection} onClose={() => setSelectedCollection(null)}>
        {selectedCollection && (
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="h-[50vh] lg:h-full">
               <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gray mb-4">Especificações</span>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">{selectedCollection.title}</h2>
              
              <p className="text-lg font-light text-brand-gray mb-8 leading-relaxed">
                {selectedCollection.fullDescription}
              </p>
              
              <div className="space-y-6 mb-12 border-t border-black/10 pt-8">
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest mb-4 font-semibold">Detalhes Técnicos</h4>
                  <ul className="space-y-2">
                    {selectedCollection.specs.map((spec, index) => (
                      <li key={index} className="text-sm font-light text-brand-gray flex items-start gap-3">
                        <span className="w-1 h-1 bg-brand-black rounded-full mt-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                   <h4 className="font-sans text-xs uppercase tracking-widest mb-4 font-semibold">Aplicações</h4>
                   <p className="text-sm font-light text-brand-gray">{selectedCollection.applications}</p>
                </div>
              </div>

              <div>
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    setSelectedCollection(null);
                    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
