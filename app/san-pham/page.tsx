import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const menuItems = [
  { name: 'Bún Tươi', price: 25000, image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Nước Mắm Cốt', price: 55000, image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80' },
  { name: 'Bột Ngũ Vị Hương', price: 35000, image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Đậu Phộng Rang', price: 29000, image: 'https://images.unsplash.com/photo-1573749059444-fa26c5109d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Bột Nghệ', price: 20000, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Mì Gạo Khô', price: 30000, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80' },
];

export default function SanPham() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sản Phẩm Của Chúng Tôi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Card key={item.name}>
            <CardContent className="p-0">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-muted-foreground mb-4">{item.price.toLocaleString('vi-VN')} ₫</p>
              <Button>Thêm vào giỏ hàng</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}