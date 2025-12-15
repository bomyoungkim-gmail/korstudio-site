export const Applications = () => {
    const apps = [
      { title: 'Residencial', desc: 'Living, Home Theater, Dormitórios', image: `${import.meta.env.BASE_URL}assets/ambiente_residencial_1765423265989.png` },
      { title: 'Corporativo', desc: 'Recepções, Salas de Reunião, Auditórios', image: `${import.meta.env.BASE_URL}assets/ambiente_corporativo_1765423280687.png` },
      { title: 'Comercial', desc: 'Hotéis, Restaurantes, Lojas', image: `${import.meta.env.BASE_URL}assets/ambiente_comercial_1765423294568.png` }
    ];
  
    return (
      <section id="aplicacoes" className="py-32 lg:py-48 bg-brand-white">
        <div className="max-w-[1800px] mx-auto px-4 lg:px-16">
          <h2 className="font-serif text-4xl lg:text-6xl text-brand-black mb-24 text-center">Aplicações</h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {apps.map((app, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10" />
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-brand-gray transition-colors">{app.title}</h3>
                  <p className="font-sans text-xs tracking-widest text-brand-gray uppercase">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
