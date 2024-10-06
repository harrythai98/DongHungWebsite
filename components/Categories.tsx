"use client"

import { Card, CardContent } from '@/components/ui/card';
import { ImageOff } from 'lucide-react';

const categories = [
  { name: 'Rau Củ Tươi', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80' },
  { name: 'Gia Vị Tự Nhiên', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Đậu & Hạt', image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Nấm & Rong Biển', image: 'https://images.unsplash.com/photo-1607877742574-a483adcf3d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
];

export default function Categories() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Danh Mục Sản Phẩm</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="absolute inset-0 hidden flex items-center justify-center bg-gray-200">
                  <ImageOff className="w-8 h-8 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}