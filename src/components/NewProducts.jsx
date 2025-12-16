import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const productsData = [
  {
    id: 'isa-chair',
    name: 'Isa Dining Chair',
    image: `${import.meta.env.BASE_URL}assets/product_chair_minimal.png`,
  },
  {
    id: 'naturale-panel',
    name: 'Painel Naturale',
    image: `${import.meta.env.BASE_URL}assets/naturale_panel_1765423205582.png`,
  },
  {
    id: 'organic-table',
    name: 'Mesa Orgânica',
    image: `${import.meta.env.BASE_URL}assets/product_table_organic.png`,
  },
  {
    id: 'urbano-panel',
    name: 'Painel Urbano',
    image: `${import.meta.env.BASE_URL}assets/urbano_panel_1765423219892.png`,
  },
  {
    id: 'minimal-panel',
    name: 'Painel Minimal',
    image: `${import.meta.env.BASE_URL}assets/minimal_panel_1765423234819.png`,
  },
  {
    id: 'especiais-panel',
    name: 'Painel Especial',
    image: `${import.meta.env.BASE_URL}assets/especiais_panel_1765423249036.png`,
  },
];

export const NewProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Drag State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [dragStartTime, setDragStartTime] = useState(0);

  // Constants
  const minSwipeDistance = 50; // Threshold to trigger slide change
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine items per view based on viewport
  const getItemsPerView = () => {
    if (windowWidth < 640) return 1;      // Mobile: 1 item + peek
    if (windowWidth < 1024) return 3;     // Tablet: 3 items + peek
    return 4;                              // Desktop: 4 items + peek
  };

  const itemsPerView = getItemsPerView();

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < productsData.length - itemsPerView;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Calculate the percentage to show based on items per view
  // We want to show a "peek" of the next item
  const itemWidthPercentage = itemsPerView === 1 ? 80 : 
                               itemsPerView === 3 ? 30 : 
                               23; // 4 items = ~23% each with peek

  // Handlers
  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStartTime(Date.now());
    
    // Support both mouse and touch
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const currentPosition = clientX - startX;
    setCurrentTranslate(currentPosition);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const textSelection = window.getSelection();
    if (textSelection) textSelection.removeAllRanges();

    const dragDuration = Date.now() - dragStartTime;
    const isQuickSwipe = dragDuration < 300;
    
    // Determine scroll direction and threshold
    if (currentTranslate > minSwipeDistance || (isQuickSwipe && currentTranslate > 20)) {
      if (canScrollLeft) scrollLeft();
    } else if (currentTranslate < -minSwipeDistance || (isQuickSwipe && currentTranslate < -20)) {
      if (canScrollRight) scrollRight();
    }

    // Reset drag translate
    setCurrentTranslate(0);
  };

  // Prevent default image drag
  const handleImageDragStart = (e) => e.preventDefault();

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden select-none">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-black font-light">
            New products
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'opacity-100 hover:bg-brand-black hover:text-white'
                : 'opacity-30 cursor-not-allowed'
            }`}
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              canScrollRight
                ? 'opacity-100 hover:bg-brand-black hover:text-white'
                : 'opacity-30 cursor-not-allowed'
            }`}
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Products Carousel - Single Row with Peek */}
          <div className="overflow-hidden mx-4 lg:mx-12 cursor-grab active:cursor-grabbing">
            <div
              className={`flex gap-4 lg:gap-6 ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
              style={{
                transform: `translateX(calc(-${currentIndex * itemWidthPercentage}% + ${currentTranslate}px))`,
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="group flex-shrink-0 max-w-[450px]"
                  style={{
                    width: `${itemWidthPercentage}%`,
                  }}
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-[#FAFAF8] mb-4 overflow-hidden flex items-center justify-center p-4 lg:p-6" onDragStart={handleImageDragStart}>
                    <img
                      src={product.image}
                      alt={product.name}
                      draggable="false"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Product Name */}
                  <h3 className="font-sans text-xs lg:text-sm text-center text-brand-gray group-hover:text-brand-black transition-colors">
                    {product.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
