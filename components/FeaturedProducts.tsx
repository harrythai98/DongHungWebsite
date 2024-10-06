"use client"

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImageOff } from 'lucide-react';
import { useState } from 'react';

const featuredProducts = [
  { name: 'Bún Gạo Lứt', price: 35000, image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Nước Mắm Hữu Cơ', price: 65000, image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80' },
  { name: 'Bột Nghệ Nguyên Chất', price: 45000, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Đậu Phộng Hữu Cơ', price: 39000, image: 'https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
];

export default function FeaturedProducts() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Sản Phẩm Nổi Bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: typeof featuredProducts[0] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative h-48 bg-gray-100">
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <ImageOff className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">{product.price.toLocaleString('vi-VN')} ₫</p>
        <Button className="rounded-full">Thêm vào giỏ hàng</Button>
      </CardFooter>
    </Card>
  );
}