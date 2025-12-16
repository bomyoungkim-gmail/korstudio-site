import { FileText, Grid3x3, Palette } from 'lucide-react';
import { Button } from './ui/Button';

export const Materials = () => {
  const materials = [
    {
      icon: FileText,
      title: 'Catálogo Geral',
      description: 'Catálogo completo em PDF com todas as coleções, acabamentos e especificações técnicas.',
      file: '/documents/catalogo-studiokor.pdf'
    },
    {
      icon: Grid3x3,
      title: 'Fichas Técnicas',
      description: 'Fichas detalhadas de cada produto com dimensões, pesos, aplicações e cuidados.',
      file: '/documents/fichas-tecnicas.pdf'
    },
    {
      icon: Palette,
      title: 'Texturas para 3D',
      description: 'Arquivos de textura em alta resolução para uso em SketchUp, Revit e outros softwares 3D.',
      file: '#'
    }
  ];

  const handleDownload = (file, title) => {
    if (file === '#') {
      alert('Download de texturas será disponibilizado em breve. Entre em contato para receber os arquivos.');
      return;
    }
    window.open(file, '_blank');
  };

  return (
    <section id="materiais" className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-6">
          Materiais para Profissionais
        </h2>
        <p className="text-lg text-brand-gray text-center max-w-3xl mx-auto mb-12">
          Disponibilizamos materiais técnicos completos para facilitar a especificação e desenvolvimento dos seus projetos.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {materials.map((material) => {
            const Icon = material.icon;
            return (
              <article key={material.title} className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-4 text-brand-brown" />
                <h3 className="font-serif text-xl mb-3">{material.title}</h3>
                <p className="text-brand-gray text-sm mb-6">{material.description}</p>
                <Button onClick={() => handleDownload(material.file, material.title)}>
                  Baixar
                </Button>
              </article>
            );
          })}
        </div>

        <div className="bg-brand-brown rounded-lg p-12 text-center text-white max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl mb-4">Arquitetos, designers e marcenarias</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Nossa equipe técnica está disponível para auxiliar em detalhamentos, especificações e dúvidas sobre aplicação dos painéis.
          </p>
          <Button
            variant="secondary"
            className="bg-white text-brand-brown border-white hover:bg-brand-bg"
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Falar com a equipe técnica
          </Button>
        </div>
      </div>
    </section>
  );
};
