import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl md:text-2xl font-bold text-primary flex items-center">
              <Leaf className="mr-2" />
              Đông Hưng Thực Phẩm
            </Link>
            <p className="mt-2 text-muted-foreground">Nguyên liệu nấu ăn Việt Nam tươi sạch, tốt cho sức khỏe.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Trang chủ</Link></li>
              <li><Link href="/san-pham" className="text-muted-foreground hover:text-primary transition-colors">Sản phẩm</Link></li>
              <li><Link href="/gioi-thieu" className="text-muted-foreground hover:text-primary transition-colors">Giới thiệu</Link></li>
              <li><Link href="/lien-he" className="text-muted-foreground hover:text-primary transition-colors">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p className="text-muted-foreground">123 Đường Lê Lợi, Quận 1, TP.HCM</p>
            <p className="text-muted-foreground">Điện thoại: (028) 1234-5678</p>
            <p className="text-muted-foreground">Email: info@donghuongthucpham.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">TikTok</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2023 Đông Hưng Thực Phẩm. Bản quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}