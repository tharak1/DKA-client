import React from 'react';

const SvgComponent: React.FC = () => {
  return (
    <div className="absolute right-0 top-10 flex flex-col items-center space-y-4">
      <svg viewBox="0 0 200 200" className="w-24 h-24">
        {/* Example SVG content */}
        <path d="M20,20 C40,0 60,0 80,20" stroke="black" fill="transparent" />
        <text x="20" y="50" fontSize="20" fontFamily="Arial">DKA</text>
        {/* Add the rest of your SVG paths and shapes here */}
      </svg>
      <img src="path_to_guitar_image.png" alt="Guitar" className="w-12 h-12" />
      <img src="path_to_book_image.png" alt="Book" className="w-12 h-12" />
      <img src="path_to_dancer_image.png" alt="Dancer" className="w-12 h-12" />
      <img src="path_to_palette_image.png" alt="Palette" className="w-12 h-12" />
    </div>
  );
}

export default SvgComponent;
