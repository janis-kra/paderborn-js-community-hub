import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SocialLinks from '../components/SocialLinks';
import LinkedInFeed from '../components/LinkedInFeed';
import SpeakersSection from '../components/SpeakersSection';
import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';

const Index = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'PaderbornJS Community',
    description: 'A community of JavaScript enthusiasts, developers, and learners in Paderborn, Germany. Join us to learn, share, and connect.',
    url: 'https://paderbornjs.org',
    mainEntity: {
      '@type': 'Organization',
      name: 'PaderbornJS',
      url: 'https://paderbornjs.org',
      logo: 'https://paderbornjs.org/images/logo.png',
      sameAs: [
        'https://github.com/paderbornjs',
        'https://meetup.com/paderbornjs',
        'https://linkedin.com/company/paderbornjs'
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="JavaScript Community in Paderborn"
        canonical="https://paderbornjs.org"
        structuredData={structuredData}
      />
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <LinkedInFeed />
        <SocialLinks />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
