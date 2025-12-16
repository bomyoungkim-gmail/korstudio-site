export const Applications = () => {
  const applications = [
    {
      title: 'Residencial',
      image: '/assets/ambiente_residencial_1765423265989.png',
      uses: ['Salas de TV', 'Cabeceiras','Closets', 'Halls de entrada']
    },
    {
      title: 'Corporativo',
      image: '/assets/ambiente_corporativo_1765423280687.png',
      uses: ['Escritórios', 'Lobbies', 'Salas de reunião', 'Recepções']
    },
    {
      title: 'Comercial & Hospitalidade',
      image: '/assets/ambiente_comercial_1765423294568.png',
      uses: ['Lojas', 'Restaurantes', 'Hotéis', 'Clínicas']
    }
  ];

  return (
    <section id="aplicacoes" className="py-20 bg-brand-bg">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-12">
          Onde nossos painéis ganham destaque
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div key={app.title} className="relative rounded-lg overflow-hidden aspect-[4/3] group">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="font-serif text-2xl text-white mb-3">{app.title}</h4>
                <ul className="space-y-1">
                  {app.uses.map((use, index) => (
                    <li key={index} className="text-white/90 text-sm">• {use}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
