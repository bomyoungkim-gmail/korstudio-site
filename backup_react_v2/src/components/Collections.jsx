import { useState } from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

const collectionsData = [
  {
    id: 'naturale',
    title: 'Coleção Naturale',
    image: '/assets/naturale_panel_1765423205582.png',
    description: 'Painéis com lâminas naturais e veios marcantes para ambientes acolhedores.',
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
    title: 'Coleção Urbano',
    image: '/assets/urbano_panel_1765423219892.png',
    description: 'Texturas contemporâneas e lineares perfeitas para espaços corporativos modernos.',
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
    title: 'Coleção Minimal',
    image: '/assets/minimal_panel_1765423234819.png',
    description: 'Superfícies lisas e neutras que trazem elegância minimalista ao projeto.',
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
    title: 'Coleção Especiais',
    image: '/assets/especiais_panel_1765423249036.png',
    description: 'Painéis ripados, usinados e desenhos personalizados sob medida para cada projeto.',
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
      <section id="colecoes" className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-6">
            Nossas coleções de painéis
          </h2>
          <p className="text-lg text-brand-gray text-center max-w-3xl mx-auto mb-12">
            Explore nossa linha completa de painéis de madeira, cada uma desenvolvida para atender diferentes estilos e necessidades de projeto.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionsData.map((collection) => (
              <article
                key={collection.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedCollection(collection)}
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-3">{collection.title}</h3>
                  <p className="text-brand-gray mb-4 text-sm">{collection.description}</p>
                  <span className="inline-flex items-center gap-2 text-brand-brown font-semibold text-sm group">
                    Ver detalhes
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedCollection} onClose={() => setSelectedCollection(null)}>
        {selectedCollection && (
          <div>
            <h2 className="font-serif text-3xl mb-4">{selectedCollection.title}</h2>
            <img
              src={selectedCollection.image}
              alt={selectedCollection.title}
              className="w-full rounded-lg mb-6"
            />
            <p className="text-lg text-brand-gray mb-6">{selectedCollection.fullDescription}</p>
            
            <h3 className="font-serif text-xl mb-3">Especificações Técnicas</h3>
            <ul className="space-y-2 mb-6">
              {selectedCollection.specs.map((spec, index) => (
                <li key={index} className="text-brand-gray flex items-start">
                  <span className="text-brand-brown mr-2">✓</span>
                  {spec}
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-xl mb-3">Aplicações Recomendadas</h3>
            <p className="text-brand-gray mb-6">{selectedCollection.applications}</p>

            <div className="text-center">
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedCollection(null);
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Solicitar orçamento
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
