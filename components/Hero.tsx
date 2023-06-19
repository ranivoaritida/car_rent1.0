"use client";
 import React from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton';


const Hero = () => {
    const handleScroll = () => {} 
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Trouvez, réservez ou louez une voiture, rapidement et facilement !
            </h1>
            <p className='hero__subtitle'>
                Simplifiez votre expérience de location de voiture grâce à notre processus de réservation sans effort.
            </p>
            <CustomButton 
                title="Voir les voitures"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt='hero' fill className='object-contain' />
            </div>
            <div className='hero__image-overlay'/>
        </div>
    </div>
  );
  
}

export default Hero;