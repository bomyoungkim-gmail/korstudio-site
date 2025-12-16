import { MessageCircle } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511987654321"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-30 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Footer */}
      <footer className="bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="font-serif text-2xl font-semibold mb-4">Studio Kor</div>
              <p className="text-white/70 text-sm">
                Painéis de madeira personalizados de alto padrão para projetos residenciais, corporativos e comerciais em todo o Brasil.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                {['Home', 'Coleções', 'Personalização', 'Aplicações'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                      className="text-white/70 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Profissionais</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Materiais Técnicos', href: '#materiais' },
                  { label: 'Projetos', href: '#projetos' },
                  { label: 'Sobre Nós', href: '#sobre' },
                  { label: 'Contato', href: '#contato' }
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-white/70 text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © {currentYear} Studio Kor. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
