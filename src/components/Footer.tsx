
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 rounded bg-jsyellow flex items-center justify-center">
                <span className="font-mono text-xs font-bold">JS</span>
              </div>
              <span className="font-display font-semibold text-lg">PaderbornJS</span>
            </Link>
            
            <p className="text-sm text-foreground/70 max-w-md">
              A community of JavaScript enthusiasts in Paderborn, Germany. We organize regular meetups to learn, share, and discuss all things JavaScript.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#meetups" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Meetups
                </a>
              </li>
              <li>
                <Link to="/code-of-conduct" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/paderbornjs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://meetup.com/paderbornjs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Meetup
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/paderbornjs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/50 mb-4 md:mb-0">
            &copy; {currentYear} PaderbornJS. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link to="/code-of-conduct" className="text-sm text-foreground/50 hover:text-foreground/70 transition-colors">
              Code of Conduct
            </Link>
            <a href="#" className="text-sm text-foreground/50 hover:text-foreground/70 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
