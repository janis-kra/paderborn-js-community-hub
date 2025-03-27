
import { Github, Calendar } from 'lucide-react';

const SocialLinks = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 opacity-0 animate-fade-in">
            Connect With Us
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 animate-fade-in delay-100">
            Join Our Community
          </h2>
          
          <p className="text-lg text-foreground/80 text-balance opacity-0 animate-fade-in delay-200">
            PaderbornJS is more than just a meetup, it's a growing community. Stay connected and never miss an update.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <SocialCard 
            platform="GitHub"
            icon={<Github size={24} />}
            description="Check our repositories, contribute to our projects, and see what we're building."
            buttonText="Follow on GitHub"
            buttonLink="https://github.com/paderbornjs"
            delay={300}
          />
          
          <SocialCard 
            platform="Meetup"
            icon={<Calendar size={24} />}
            description="Join our Meetup group to RSVP for events and stay updated on all our activities."
            buttonText="Join on Meetup"
            buttonLink="https://meetup.com/paderbornjs"
            primary
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

const SocialCard = ({ 
  platform, 
  icon, 
  description, 
  buttonText, 
  buttonLink,
  primary = false,
  delay
}: { 
  platform: string;
  icon: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  primary?: boolean;
  delay: number;
}) => (
  <div 
    className={`glass-panel rounded-xl p-8 opacity-0 animate-fade-in delay-${delay}`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`h-10 w-10 rounded-lg ${primary ? 'bg-primary/10 text-primary' : 'bg-jsyellow'} flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="font-display font-semibold text-xl">{platform}</h3>
    </div>
    
    <p className="text-foreground/80 mb-6">
      {description}
    </p>
    
    <a 
      href={buttonLink}
      target="_blank"
      rel="noopener noreferrer" 
      className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
        primary 
          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
          : 'bg-jsyellow hover:bg-jsyellow/90 text-black'
      }`}
    >
      {buttonText}
    </a>
  </div>
);

export default SocialLinks;
