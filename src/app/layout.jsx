import Footer from './../components/footer';
import './../styles/global.css';

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
