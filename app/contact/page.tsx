import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Liên Hệ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Thông Tin Liên Hệ</h2>
          <p className="mb-2">Địa chỉ: 123 Đường Lê Lợi, Quận 1, TP.HCM</p>
          <p className="mb-2">Điện thoại: (028) 1234-5678</p>
          <p className="mb-2">Email: info@huongviviet.com</p>
          <p className="mb-4">Giờ làm việc: 9:00 - 22:00, Thứ 2 - Chủ Nhật</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Gửi Tin Nhắn</h2>
          <form>
            <div className="mb-4">
              <Input placeholder="Họ và tên" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <Input placeholder="Số điện thoại" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Nội dung tin nhắn" />
            </div>
            <Button type="submit">Gửi Tin Nhắn</Button>
          </form>
        </div>
      </div>
    </div>
  );
}