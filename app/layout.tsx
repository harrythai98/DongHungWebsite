import './globals.css';
import type { Metadata } from 'next';
import { Quicksand, Montserrat } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Đông Hưng Thực Phẩm - Nguyên Liệu Nấu Ăn Việt Nam',
  description: 'Nguyên liệu nấu ăn Việt Nam chất lượng cao, tươi sạch và tốt cho sức khỏe từ Đông Hưng Thực Phẩm',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${quicksand.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}