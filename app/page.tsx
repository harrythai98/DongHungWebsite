"use client"

import FeaturedProducts from '@/components/FeaturedProducts';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}