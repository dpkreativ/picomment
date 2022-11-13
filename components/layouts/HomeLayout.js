import Footer from '../ui/organisms/Footer';
import Header from '../ui/organisms/Header';

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen p-5 max-w-xl mx-auto">{children}</main>
      <Footer />
    </>
  );
}
