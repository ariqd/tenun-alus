import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import OurArtisans from './components/OurArtisans';
import TestimonialCarousel from './components/TestimonialCarousel';
import FeatureSection from './components/FeatureSection';
// import InstagramSection from './components/InstagramSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <OurArtisans />
        <TestimonialCarousel />
        <FeatureSection />
        {/* <InstagramSection /> */}
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;