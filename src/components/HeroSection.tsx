
import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

// Mockup data - would be replaced with actual API call in production
const meetupData = {
  title: "Modern JavaScript: State of the Art 2024",
  date: "2024-07-15T19:00:00",
  location: "Zukunftsmeile 1, 33102 Paderborn",
  url: "https://meetup.com/paderbornjs",
};

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState("");
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const meetupTime = new Date(meetupData.date).getTime();
      const now = new Date().getTime();
      const difference = meetupTime - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        return `${days} days, ${hours} hours`;
      }
      
      return "Happening now!";
    };
    
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-20 lg:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-background z-0"></div>
      
      {/* JS dots pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-[10%] left-[15%] h-40 w-40 rounded-full bg-jsyellow"></div>
        <div className="absolute top-[20%] right-[10%] h-24 w-24 rounded-full bg-jsyellow"></div>
        <div className="absolute bottom-[15%] left-[30%] h-32 w-32 rounded-full bg-jsyellow"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 z-10">
        <div className="flex flex-col justify-center">
          <div className="space-y-6">
            <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full opacity-0 animate-fade-in">
              JavaScript Community
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight opacity-0 animate-fade-in delay-100">
              Welcome to <span className="text-gradient">PaderbornJS</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-lg text-balance opacity-0 animate-fade-in delay-200">
              A community of JavaScript enthusiasts, developers, and learners in Paderborn, Germany. Join us to learn, share, and connect.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4 opacity-0 animate-fade-in delay-300">
              <a 
                href="#meetups" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
              >
                Our Meetups
                <ArrowRight size={16} />
              </a>
              
              <a 
                href={meetupData.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:bg-secondary/80 transition-colors"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center opacity-0 animate-fade-in delay-400">
          <div className="w-full max-w-md glass-panel rounded-2xl p-8 hover-card-animation">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-xl">Next Meetup</h3>
                <span className="text-sm text-primary font-medium animate-subtle-pulse">
                  In {timeLeft}
                </span>
              </div>
              
              <h2 className="font-bold text-2xl">{meetupData.title}</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <Calendar size={16} className="text-primary" />
                  <span>{formatDate(meetupData.date)}</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <MapPin size={16} className="text-primary" />
                  <span>{meetupData.location}</span>
                </div>
              </div>
              
              <a 
                href={meetupData.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                RSVP on Meetup
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
