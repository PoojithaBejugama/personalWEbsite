import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Subjects from './components/Subjects';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BookingEmbed from './components/BookingEmbed';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Subjects />
        <Pricing />
        <Testimonials />
        <BookingEmbed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
