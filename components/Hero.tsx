"use client"

import { Button } from '@/components/ui/button';
import { ImageOff } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[500px] flex items-center justify-center bg-gray-100">
      <img
        src="/images/hero-background.jpg"  // Update this line with your image name
        alt="Vietnamese cuisine"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="absolute inset-0 hidden flex items-center justify-center bg-gray-200">
        <ImageOff className="w-16 h-16 text-gray-400" />
      </div>
      <div className="absolute inset-0 bg-primary bg-opacity-20"></div>
      <div className="relative z-10 text-center max-w-3xl px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">Đông Hưng Thực Phẩm</h1>
        <p className="text-xl mb-8 text-primary-foreground">Nguyên Liệu Ẩm Thực Việt Nam Tươi Sạch, Tốt Cho Sức Khỏe</p>
        <Button size="lg" className="rounded-full">Khám Phá Sản Phẩm</Button>
      </div>
    </div>
  );
}