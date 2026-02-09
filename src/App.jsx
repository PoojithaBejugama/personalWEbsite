import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Subjects from './components/Subjects';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BookingEmbed from './components/BookingEmbed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import backgroundImg from './assets/background.png';

function App() {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'repeat'
      }}
    >
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
  );
}

export default App;
