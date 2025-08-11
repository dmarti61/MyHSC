import '@/styles/global.css';
import Footer from '@/components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
