import { useEffect } from 'react';

const Carousel = ({ items }) => {
  useEffect(() => {
    // Initialize HS Carousel
    if (window.HSCarousel) {
      window.HSCarousel.autoInit();
    }
  }, []);

  return (
    <div 
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
        "slidesQty": {
          "xs": 1,
          "lg": 3
        },
        "isCentered": true,
        "isSnap": true
      }' 
      className="relative py-12"
    >
      <div className="hs-carousel w-full flex snap-x snap-mandatory overflow-x-auto bg-white rounded-lg">
        <div className="hs-carousel-body min-h-72 flex flex-nowrap gap-2 transition-transform duration-700 opacity-0">
          {items.map((item, index) => (
            <div key={index} className="hs-carousel-slide snap-center">
              <div className="flex flex-col items-center justify-center h-full p-6">
                {item.icon && (
                  <div className="mb-4 text-blue-500">
                    {item.icon}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
                {item.features && (
                  <ul className="mt-4 space-y-1 text-sm text-gray-700">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        type="button" 
        className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute top-1/2 -left-4 -translate-y-1/2 inline-flex justify-center items-center w-11.5 h-11.5 text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-full"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      
      <button 
        type="button" 
        className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute top-1/2 -right-4 -translate-y-1/2 inline-flex justify-center items-center w-11.5 h-11.5 text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-full"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center mt-6 space-x-2"></div>
    </div>
  );
};

export default Carousel;
