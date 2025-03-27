import { Code, Users, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 opacity-0 animate-fade-in">
            About Us
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 animate-fade-in delay-100">
            What is PaderbornJS?
          </h2>
          
          <p className="text-lg text-foreground/80 text-balance opacity-0 animate-fade-in delay-200">
            PaderbornJS is a community-driven meetup for JavaScript enthusiasts of all skill levels. We focus on learning together, sharing knowledge, and building connections in a welcoming environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100 + 300}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-secondary/50 rounded-2xl p-8 lg:p-12 opacity-0 animate-fade-in delay-600">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Who can join?</h3>
              <p className="text-foreground/80 mb-6">
                PaderbornJS welcomes everyone interested in JavaScript and web development. Whether you're a:
              </p>
              
              <ul className="space-y-3">
                {participants.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What to expect at our meetups:</h3>
              
              <ul className="space-y-4">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-6 w-6 flex-shrink-0 rounded-full bg-jsyellow flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) => (
  <div 
    className={`bg-background rounded-xl p-6 border border-border/50 shadow-sm hover-card-animation opacity-0 animate-fade-in delay-${delay > 500 ? 500 : delay}`}
  >
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
      <Icon size={24} />
    </div>
    
    <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const features = [
  {
    icon: Calendar,
    title: "Regular Meetups",
    description: "We organize monthly meetups with talks, workshops, and discussions about JavaScript and web technologies."
  },
  {
    icon: Code,
    title: "Knowledge Sharing",
    description: "Learn from experienced developers, share your projects, and stay updated with the latest in JavaScript."
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with like-minded developers, find collaborators, mentors, or friends in a supportive environment."
  }
];

const participants = [
  "Experienced JavaScript developers",
  "Beginners just starting out",
  "Students interested in web development",
  "Professional developers looking to network",
  "Anyone curious about JavaScript and modern web technologies"
];

const expectations = [
  "Insightful talks from community members and guest speakers",
  "Hands-on workshops to improve your skills",
  "Networking opportunities with fellow developers",
  "Project showcases and discussions",
  "A welcoming, inclusive environment for all skill levels"
];

export default AboutSection;
