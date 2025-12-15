import { FileText, Download, Layers } from 'lucide-react';

export const Materials = () => {
  return (
    <section id="materiais" className="py-32 lg:py-48 bg-[#F5F5F3]">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-16 text-center">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gray mb-8 block">Área do Profissional</span>
        <h2 className="font-serif text-4xl lg:text-6xl text-brand-black mb-12">
          Downloads Técnicos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a href="/documents/catalogo-studiokor.pdf" download className="group bg-white p-12 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-black/5 flex flex-col items-center">
            <FileText className="w-8 h-8 text-brand-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-serif text-xl mb-2">Catálogo Digital</h3>
            <span className="text-[10px] tracking-widest text-brand-gray uppercase group-hover:text-black transition-colors">Download PDF</span>
          </a>

          <a href="/documents/fichas-tecnicas.pdf" download className="group bg-white p-12 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-black/5 flex flex-col items-center">
            <Download className="w-8 h-8 text-brand-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-serif text-xl mb-2">Fichas Técnicas</h3>
            <span className="text-[10px] tracking-widest text-brand-gray uppercase group-hover:text-black transition-colors">Especificações</span>
          </a>

          <button onClick={() => alert('Em breve')} className="group bg-white p-12 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-black/5 flex flex-col items-center">
            <Layers className="w-8 h-8 text-brand-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-serif text-xl mb-2">Texturas 3D</h3>
            <span className="text-[10px] tracking-widest text-brand-gray uppercase group-hover:text-black transition-colors">Sketchup / Max</span>
          </button>
        </div>
      </div>
    </section>
  );
};
