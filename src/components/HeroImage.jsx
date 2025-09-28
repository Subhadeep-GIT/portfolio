import React from 'react';
import hostImage from "./assets/images/200345305009.jpg";

const HeroImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <img 
        src={hostImage}
        alt='Hostinger Horizons' 
      />
    </div>
  );
};

export default HeroImage;