export const Personalization = () => {
  return (
    <section id="personalizacao" className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-12">
          Personalização e tecnologia
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="font-serif text-2xl mb-6">O que personalizamos</h3>
            <ul className="space-y-3">
              {[
                'Dimensões e espessuras sob medida',
                'Variedade de lâminas naturais e técnicas',
                'Acabamentos especiais (verniz, laca, óleo)',
                'Usinagens precisas (ripado, canaletas, frisos)',
                'Portas camufladas e nichos integrados',
                'Desenhos e padrões exclusivos'
              ].map((item, index) => (
                <li key={index} className="flex items-start text-brand-gray">
                  <span className="text-brand-brown font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl mb-6">Como produzimos</h3>
            <ul className="space-y-3">
              {[
                'Maquinário CNC de alta precisão',
                'Controle de qualidade rigoroso',
                'Logística especializada para obra',
                'Suporte técnico durante toda a instalação',
                'Prazos compatíveis com cronograma de obra',
                'Garantia e assistência pós-venda'
              ].map((item, index) => (
                <li key={index} className="flex items-start text-brand-gray">
                  <span className="text-brand-brown font-bold mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-brand-border">
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            <strong className="text-brand-dark">Sustentabilidade:</strong> Utilizamos madeira de reflorestamento certificado e processos que minimizam desperdício.
          </p>
        </div>
      </div>
    </section>
  );
};
