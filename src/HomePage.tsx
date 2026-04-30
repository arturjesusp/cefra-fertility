import React from 'react';
import HomeHero from './components/HomeHero';
import HomeServices from './components/HomeServices';
import HomePackages from './components/HomePackages';
import HomeTestimonials from './components/HomeTestimonials';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomePackages />
      <HomeTestimonials />
    </>
  );
}
