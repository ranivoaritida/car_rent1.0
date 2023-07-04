"use client";

import React,{useState} from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton';
import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';

interface CarCardProps{
    car: CarProps;
}

const CarCard = ({ car }:CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg,year);

  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
            {carRent}
            <span className='{carRent} text-[14px] font-semibold'>
                /day
            </span>
        </p>
      
    </div>
  )
}

export default CarCard
