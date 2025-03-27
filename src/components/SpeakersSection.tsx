import { ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

type Speaker = {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

type Presentation = {
  id: string;
  title: string;
  description: string;
  speaker: string;
  date: string;
  slidesUrl?: string;
  videoUrl?: string;
};

const SpeakersSection = () => {
  // Mock data for speakers
  const speakers: Speaker[] = [
    {
      id: "speaker1",
      name: "Anna Schmidt",
      title: "Senior Frontend Engineer",
      bio: "Anna is a TypeScript expert with over 10 years of experience in web development. She currently works at TechCorp where she leads the frontend team.",
      expertise: ["TypeScript", "React", "State Management", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
      social: {
        twitter: "https://twitter.com/annaschmidt",
        linkedin: "https://linkedin.com/in/annaschmidt",
        github: "https://github.com/annaschmidt"
      }
    },
    {
      id: "speaker2",
      name: "Michael Chen",
      title: "Full Stack Developer",
      bio: "Michael specializes in Node.js backends and React frontends. He loves sharing knowledge about modern JavaScript patterns and practices.",
      expertise: ["Node.js", "Express", "React", "MongoDB"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        github: "https://github.com/michaelchen"
      }
    },
    {
      id: "speaker3",
      name: "Sarah Johnson",
      title: "UX Engineer",
      bio: "Sarah bridges the gap between design and development. She's passionate about creating accessible and beautiful user interfaces.",
      expertise: ["UI/UX", "Accessibility", "CSS/SCSS", "Design Systems"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      social: {
        twitter: "https://twitter.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson"
      }
    }
  ];

  // Mock data for past presentations
  const pastPresentations: Presentation[] = [
    {
      id: "pres1",
      title: "Advanced TypeScript Patterns",
      description: "A deep dive into advanced TypeScript features including mapped types, conditional types, and the infer keyword.",
      speaker: "Anna Schmidt",
      date: "February 15, 2024",
      slidesUrl: "https://speakerdeck.com/annaschmidt/advanced-typescript",
      videoUrl: "https://youtube.com/watch?v=example"
    },
    {
      id: "pres2",
      title: "Building Scalable Node.js Services",
      description: "Best practices for creating maintainable and scalable backend services with Node.js and Express.",
      speaker: "Michael Chen",
      date: "January 18, 2024",
      slidesUrl: "https://speakerdeck.com/michaelchen/scalable-nodejs"
    },
    {
      id: "pres3",
      title: "Accessibility in React Applications",
      description: "Practical techniques for making your React apps more accessible, including keyboard navigation and ARIA attributes.",
      speaker: "Sarah Johnson",
      date: "December 21, 2023",
      slidesUrl: "https://speakerdeck.com/sarahjohnson/a11y-react",
      videoUrl: "https://youtube.com/watch?v=example2"
    }
  ];

  // Upcoming speaker/presentation
  const upcomingSpeaker = {
    name: "David Wilson",
    title: "DevOps Engineer",
    presentation: "CI/CD for JavaScript Projects",
    description: "Learn how to set up efficient CI/CD pipelines for your JavaScript applications using GitHub Actions.",
    date: "April 20, 2024",
    time: "6:30 PM",
    location: "Digital Hub Paderborn"
  };

  return (
    <section id="speakers" className="py-24 px-6 bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 opacity-0 animate-fade-in">
            Our Speakers
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 animate-fade-in delay-100">
            Meet Our Community Speakers
          </h2>
          
          <p className="text-lg text-foreground/80 text-balance opacity-0 animate-fade-in delay-200">
            PaderbornJS is proud to feature talented speakers from our community who share their knowledge and experiences.
          </p>
        </div>
        
        {/* Speaker Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <SpeakerCard 
              key={speaker.id} 
              speaker={speaker} 
              delay={index * 100 + 300}
            />
          ))}
        </div>
        
        {/* Upcoming Speaker */}
        <div className="bg-background rounded-2xl p-8 mb-16 shadow-sm opacity-0 animate-fade-in delay-600">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-display font-bold">Upcoming Speaker</h3>
            <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              Next Meetup
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">{upcomingSpeaker.presentation}</h4>
              <p className="text-foreground/70 mb-4">{upcomingSpeaker.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Date:</span>
                  <span>{upcomingSpeaker.date}, {upcomingSpeaker.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Location:</span>
                  <span>{upcomingSpeaker.location}</span>
                </div>
              </div>
              
              <a 
                href="https://meetup.com/paderbornjs" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                RSVP on Meetup
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-jsyellow flex items-center justify-center text-black font-semibold text-xl">
                  {upcomingSpeaker.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h5 className="font-semibold text-lg">{upcomingSpeaker.name}</h5>
                  <p className="text-sm text-foreground/70">{upcomingSpeaker.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Past Presentations */}
        <div>
          <h3 className="text-2xl font-display font-bold mb-8 text-center opacity-0 animate-fade-in delay-700">Past Presentations</h3>
          
          <div className="space-y-6">
            {pastPresentations.map((presentation, index) => (
              <PresentationCard 
                key={presentation.id} 
                presentation={presentation}
                delay={index * 100 + 800}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker, delay }: { speaker: Speaker; delay: number }) => (
  <div 
    className={`bg-background rounded-xl p-6 shadow-sm hover-card-animation opacity-0 animate-fade-in delay-${delay > 500 ? 500 : delay}`}
  >
    <div className="mb-4 rounded-lg overflow-hidden aspect-square">
      <img 
        src={speaker.image} 
        alt={speaker.name} 
        className="w-full h-full object-cover"
      />
    </div>
    
    <h3 className="font-display font-semibold text-xl mb-1">{speaker.name}</h3>
    <p className="text-sm text-foreground/70 mb-3">{speaker.title}</p>
    
    <p className="text-sm text-foreground/80 mb-4">
      {speaker.bio}
    </p>
    
    <div className="mb-4">
      <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-2">Expertise</h4>
      <div className="flex flex-wrap gap-2">
        {speaker.expertise.map(item => (
          <span 
            key={item}
            className="text-xs bg-secondary/20 text-foreground/70 px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    
    <div className="flex gap-3 pt-3 border-t border-border/30">
      {speaker.social.github && (
        <a
          href={speaker.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground transition-colors"
          aria-label={`${speaker.name}'s GitHub`}
        >
          <Github size={18} />
        </a>
      )}
      {speaker.social.twitter && (
        <a
          href={speaker.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground transition-colors"
          aria-label={`${speaker.name}'s Twitter`}
        >
          <Twitter size={18} />
        </a>
      )}
      {speaker.social.linkedin && (
        <a
          href={speaker.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground transition-colors"
          aria-label={`${speaker.name}'s LinkedIn`}
        >
          <Linkedin size={18} />
        </a>
      )}
    </div>
  </div>
);

const PresentationCard = ({ presentation, delay }: { presentation: Presentation; delay: number }) => (
  <div 
    className={`bg-background rounded-xl p-6 shadow-sm opacity-0 animate-fade-in delay-${delay > 1000 ? 1000 : delay}`}
  >
    <div className="grid md:grid-cols-5 gap-6">
      <div className="md:col-span-3">
        <h4 className="font-display font-semibold text-lg mb-2">{presentation.title}</h4>
        <p className="text-sm text-foreground/80 mb-4">
          {presentation.description}
        </p>
        
        <div className="flex flex-wrap gap-4">
          {presentation.slidesUrl && (
            <a 
              href={presentation.slidesUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <span>View Slides</span>
              <ExternalLink size={12} />
            </a>
          )}
          {presentation.videoUrl && (
            <a 
              href={presentation.videoUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <span>Watch Recording</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
      
      <div className="md:col-span-2">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium">{presentation.speaker}</span>
          <span className="text-xs text-foreground/60">{presentation.date}</span>
        </div>
      </div>
    </div>
  </div>
);

export default SpeakersSection; 