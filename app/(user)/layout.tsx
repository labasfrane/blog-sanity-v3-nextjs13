import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto bg-neutral-50">
        <Header />
        <Banner isOpen={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
