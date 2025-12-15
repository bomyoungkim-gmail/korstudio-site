import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-dark leading-tight">
              Painéis de madeira personalizados para projetos de alto padrão
            </h1>
            <p className="text-lg text-brand-gray leading-relaxed">
              Desenvolvemos e produzimos painéis sob medida para arquitetos, marcenarias e construtoras – com acabamento preciso, variedade de padrões e suporte técnico em todas as etapas do projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                onClick={() => document.querySelector('#colecoes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver coleções
              </Button>
              <Button
                variant="secondary"
                onClick={() => document.querySelector('#materiais')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Catálogo para profissionais
              </Button>
            </div>
            <p className="text-sm text-brand-gray-light italic pt-2">
              Painéis presentes em projetos residenciais, corporativos e comerciais em todo o Brasil.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/assets/hero_ambiente.png" 
                alt="Ambiente corporativo moderno com painéis de madeira"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
