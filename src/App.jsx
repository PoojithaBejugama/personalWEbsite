import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Subjects from './components/Subjects';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BookingEmbed from './components/BookingEmbed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundDecor from './components/BackgroundDecor';

function App() {
  return (
    <div className="site-bg min-h-screen">
      <BackgroundDecor />
      <div className="relative z-10">
        <Navbar />
        <main className="py-8">
          <Hero />
          <About />
          <Subjects />
          {/* <Pricing />
          <Testimonials /> */}
          <BookingEmbed />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
