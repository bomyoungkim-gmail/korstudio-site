import { useState } from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

const projectsData = [
  {
    id: 'escritorio',
    type: 'CORPORATIVO',
    title: 'Headquarters Faria Lima',
    location: 'São Paulo, Brasil',
    image: '/assets/projeto_escritorio_1765423309225.png',
    description: 'Painel com textura Coleção Urbano aplicado em parede focal do escritório executivo.',
    fullDescription: 'Projeto de escritório executivo com painel focal aplicado em parede principal. Utilizamos a Coleção Urbano com textura linear contemporânea, criando um ambiente sofisticado e profissional.',
    collection: 'Coleção Urbano',
    area: 'Parede focal do escritório executivo (4,5m x 2,8m)',
    features: [
      'Painel em MDF 18mm com lâmina técnica',
      'Acabamento em laca acetinada',
      'Instalação com sistema de fixação invisível',
      'Iluminação LED integrada'
    ]
  },
  {
    id: 'residencial',
    type: 'RESIDENCIAL',
    title: 'Casa Bosque',
    location: 'Rio de Janeiro, Brasil',
    image: '/assets/projeto_residencial_1765423324566.png',
    description: 'Cabeceira de quarto com painéis Coleção Naturale em lâmina de nogueira.',
    fullDescription: 'Cabeceira de quarto principal com painéis em lâmina natural de nogueira. O projeto integra nichos laterais e iluminação indireta, criando um ambiente aconchegante e elegante.',
    collection: 'Coleção Naturale - Nogueira',
    area: 'Cabeceira de cama (3,2m x 2,6m)',
    features: [
      'Painéis em lâmina natural de nogueira',
      'Nichos laterais integrados',
      'Acabamento em verniz UV fosco',
      'Sistema de iluminação LED embutida'
    ]
  },
  {
    id: 'comercial',
    type: 'COMERCIAL',
    title: 'Restaurante Kōma',
    location: 'Curitiba, Brasil',
    image: '/assets/ambiente_comercial_1765423294568.png',
    description: 'Parede e teto com painéis Coleção Especiais ripados.',
    fullDescription: 'Restaurante com painéis ripados aplicados em paredes e teto, criando uma atmosfera sofisticada e acolhedora. Os painéis da Coleção Especiais foram desenvolvidos sob medida para o projeto.',
    collection: 'Coleção Especiais - Ripado Customizado',
    area: 'Paredes e teto do salão principal (aprox. 85m²)',
    features: [
      'Painéis ripados com espaçamento de 40mm',
      'Madeira tratada contra umidade',
      'Iluminação linear integrada entre ripas',
      'Acabamento em óleo natural'
    ]
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projetos" className="py-32 lg:py-48 bg-brand-white">
        <div className="w-[90%] max-w-[1800px] mx-auto px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 pb-8 border-b border-black/10">
             <h2 className="font-serif text-4xl lg:text-6xl text-brand-black">
              Projetos Recentes
            </h2>
            <p className="hidden lg:block font-sans text-xs tracking-widest uppercase text-brand-gray">
              Architecture & Interiors 2024-2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <article
                key={project.id}
                className={`group cursor-pointer ${index === 1 ? 'lg:mt-32' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-gray-100">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 z-10 transition-colors duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-gray mb-3 block opacity-50">0{index + 1} / {project.type}</span>
                  <h3 className="font-serif text-3xl mb-2 group-hover:opacity-75 transition-opacity">{project.title}</h3>
                  <p className="text-xs font-sans tracking-wide text-brand-gray">{project.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="h-[40vh] lg:h-full">
               <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-2">{selectedProject.type}</span>
              <h2 className="font-serif text-3xl lg:text-4xl mb-2">{selectedProject.title}</h2>
              <p className="text-xs font-sans tracking-widest text-brand-gray mb-8">{selectedProject.location}</p>
              
              <p className="text-base font-light text-brand-gray mb-8 leading-relaxed">
                {selectedProject.fullDescription}
              </p>
              
              <div className="space-y-6 pt-6 border-t border-black/5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2">Coleção</h4>
                    <p className="text-sm font-light text-brand-gray">{selectedProject.collection}</p>
                  </div>
                   <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2">Área</h4>
                    <p className="text-sm font-light text-brand-gray">{selectedProject.area}</p>
                  </div>
                </div>

                 <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-2">Detalhes</h4>
                    <ul className="text-sm font-light text-brand-gray space-y-1">
                      {selectedProject.features.map((f, i) => <li key={i}>• {f}</li>)}
                    </ul>
                  </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                   onClick={() => {
                    setSelectedProject(null);
                    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Orçamento Similar
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
