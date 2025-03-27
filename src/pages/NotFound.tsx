
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-lg">
          <div className="mb-6 inline-block">
            <div className="text-9xl font-display font-bold text-primary/10">404</div>
          </div>
          
          <h1 className="text-3xl font-display font-bold mb-4 opacity-0 animate-fade-in">
            Page Not Found
          </h1>
          
          <p className="text-foreground/70 mb-8 opacity-0 animate-fade-in delay-100">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-sm opacity-0 animate-fade-in delay-200"
          >
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
