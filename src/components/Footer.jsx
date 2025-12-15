import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-white pt-24 pb-12 border-t border-black/5">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
          <div>
             <a href="#" className="font-sans text-lg tracking-[0.2em] font-bold text-brand-black uppercase block mb-8">
              Studio Kor
            </a>
            <p className="font-sans text-xs font-light text-brand-gray tracking-wide max-w-xs">
              Arquitetura e design através da madeira. <br/>
              Excelência em superfícies naturais.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-black hover:opacity-50 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-black hover:opacity-50 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
             <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-brand-black hover:opacity-50 transition-opacity">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5">
          <p className="font-sans text-[10px] tracking-widest text-brand-gray uppercase mb-4 md:mb-0">
            &copy; {currentYear} Studio Kor. All rights reserved.
          </p>
          <p className="font-sans text-[10px] tracking-widest text-brand-gray uppercase">
            São Paulo • Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};
