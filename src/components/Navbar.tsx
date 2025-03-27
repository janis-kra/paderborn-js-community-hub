
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Calendar } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 opacity-0 animate-fade-in"
        >
          <div className="relative h-8 w-8 rounded bg-jsyellow flex items-center justify-center">
            <span className="font-mono text-xs font-bold">JS</span>
          </div>
          <span className="font-display font-semibold text-lg">PaderbornJS</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/#about" delay={100}>About</NavLink>
          <NavLink href="/#meetups" delay={200}>Meetups</NavLink>
          <NavLink href="/code-of-conduct" delay={300}>Code of Conduct</NavLink>
        </nav>
        
        <div className="flex items-center space-x-3 opacity-0 animate-fade-in delay-400">
          <SocialButton href="https://github.com/paderbornjs" icon={<Github size={18} />} label="GitHub" />
          <SocialButton href="https://meetup.com/paderbornjs" icon={<Calendar size={18} />} label="Meetup" primary />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ 
  href, 
  delay = 0, 
  children 
}: { 
  href: string; 
  delay?: number; 
  children: React.ReactNode;
}) => (
  <a 
    href={href} 
    className={`text-sm font-medium text-foreground/80 hover:text-foreground transition-colors opacity-0 animate-fade-in delay-${delay}`}
  >
    {children}
  </a>
);

const SocialButton = ({ 
  href, 
  icon, 
  label, 
  primary = false 
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
}) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all
      ${primary 
        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}
      hover:shadow-md
    `}
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Navbar;
