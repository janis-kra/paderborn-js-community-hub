
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SocialLinks from '../components/SocialLinks';
import LinkedInFeed from '../components/LinkedInFeed';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <LinkedInFeed />
        <SocialLinks />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
