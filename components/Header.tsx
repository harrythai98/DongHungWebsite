"use client"

import Link from 'next/link';
import { ShoppingCart, Menu, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold text-primary flex items-center">
          <Leaf className="mr-2" />
          Đông Hưng Thực Phẩm
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Input type="search" placeholder="Tìm sản phẩm..." className="w-64 rounded-full" />
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-foreground hover:text-primary transition-colors">Trang chủ</Link></li>
              <li><Link href="/san-pham" className="text-foreground hover:text-primary transition-colors">Sản phẩm</Link></li>
              <li><Link href="/gioi-thieu" className="text-foreground hover:text-primary transition-colors">Giới thiệu</Link></li>
              <li><Link href="/lien-he" className="text-foreground hover:text-primary transition-colors">Liên hệ</Link></li>
            </ul>
          </nav>
          <Button variant="outline" className="rounded-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Giỏ hàng (0)
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Khám phá nguyên liệu ẩm thực Việt Nam
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6">
                <ul className="space-y-4">
                  <li><Link href="/" className="text-foreground hover:text-primary transition-colors">Trang chủ</Link></li>
                  <li><Link href="/san-pham" className="text-foreground hover:text-primary transition-colors">Sản phẩm</Link></li>
                  <li><Link href="/gioi-thieu" className="text-foreground hover:text-primary transition-colors">Giới thiệu</Link></li>
                  <li><Link href="/lien-he" className="text-foreground hover:text-primary transition-colors">Liên hệ</Link></li>
                </ul>
              </nav>
              <div className="mt-6">
                <Input type="search" placeholder="Tìm sản phẩm..." className="w-full mb-4 rounded-full" />
                <Button className="w-full rounded-full">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Giỏ hàng (0)
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}