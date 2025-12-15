import { useState } from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

const projectsData = [
  {
    id: 'escritorio',
    type: 'CORPORATIVO',
    title: 'Escritório Corporativo',
    location: 'São Paulo, SP',
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
    title: 'Residência de Alto Padrão',
    location: 'Rio de Janeiro, RJ',
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
    title: 'Restaurante Contemporâneo',
    location: 'Curitiba, PR',
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
      <section id="projetos" className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-6">
            Projetos
          </h2>
          <p className="text-lg text-brand-gray text-center max-w-3xl mx-auto mb-12">
            Conheça alguns dos projetos que utilizaram nossos painéis de madeira personalizados.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-brown mb-2 block">{project.type}</span>
                  <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-brand-gray mb-3">{project.description}</p>
                  <p className="text-xs text-brand-gray-light">{project.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <span className="text-sm font-semibold text-brand-brown mb-2 block">{selectedProject.type}</span>
            <h2 className="font-serif text-3xl mb-2">{selectedProject.title}</h2>
            <p className="text-brand-gray mb-6">{selectedProject.location}</p>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg mb-6"
            />
            <p className="text-lg text-brand-gray mb-6">{selectedProject.fullDescription}</p>
            
            <h3 className="font-serif text-xl mb-3">Detalhes do Projeto</h3>
            <p className="mb-2"><strong>Coleção utilizada:</strong> {selectedProject.collection}</p>
            <p className="mb-4"><strong>Área aplicada:</strong> {selectedProject.area}</p>
            
            <h4 className="font-semibold mb-3">Características</h4>
            <ul className="space-y-2 mb-6">
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="text-brand-gray flex items-start">
                  <span className="text-brand-brown mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedProject(null);
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Solicitar orçamento similar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
