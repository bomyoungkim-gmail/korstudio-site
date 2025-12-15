import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Coleções', href: '#colecoes' },
    { label: 'Personalização', href: '#personalizacao' },
    { label: 'Aplicações', href: '#aplicacoes' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-white/90 backdrop-blur-sm py-4 border-b border-black/5' : 'bg-transparent py-4'}`}>
      <nav className="max-w-[1800px] mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between">
          <a href="#" className="font-sans text-lg tracking-[0.2em] font-bold text-brand-black uppercase z-50 relative whitespace-nowrap shrink-0">
            Studio Kor
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[10px] xl:text-[11px] font-sans tracking-[0.15em] uppercase text-brand-black hover:opacity-50 transition-opacity whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#materiais" 
                onClick={(e) => handleNavClick(e, '#materiais')}
                className="ml-4 px-4 py-2 border border-brand-black text-[10px] font-sans tracking-[0.2em] uppercase hover:bg-brand-black hover:text-white transition-all duration-300 whitespace-nowrap block min-w-max"
              >
                Area Pro
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center z-50 relative"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-brand-white z-40 flex items-center justify-center transition-all duration-500 transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <ul className="text-center space-y-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-2xl font-serif font-light text-brand-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
