
import { ExternalLink } from 'lucide-react';

type LinkedInPost = {
  id: string;
  date: string;
  author: string;
  content: string;
  likes: number;
  comments: number;
  image?: string;
};

const LinkedInFeed = () => {
  // Mock data for LinkedIn posts
  const mockPosts: LinkedInPost[] = [
    {
      id: "post1",
      date: "2 days ago",
      author: "PaderbornJS",
      content: "Excited to announce our next meetup on Modern React Patterns! Join us next Thursday at 6:30 PM at the Digital Hub. RSVP on our Meetup page!",
      likes: 24,
      comments: 5
    },
    {
      id: "post2",
      date: "1 week ago",
      author: "PaderbornJS",
      content: "Thanks to everyone who attended our TypeScript workshop yesterday! Special thanks to our speaker, Anna Schmidt, for the great presentation on advanced type system features. Slides are now available on our GitHub.",
      likes: 32,
      comments: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "post3",
      date: "2 weeks ago",
      author: "PaderbornJS",
      content: "Are you using Node.js for your backend? We're planning a series on backend JavaScript development for our upcoming meetups. Drop your suggestions in the comments!",
      likes: 18,
      comments: 12
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 opacity-0 animate-fade-in">
            Social Updates
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 animate-fade-in delay-100">
            Latest from LinkedIn
          </h2>
          
          <p className="text-lg text-foreground/80 text-balance opacity-0 animate-fade-in delay-200">
            Follow us on LinkedIn to stay up-to-date with our community news, upcoming events, and JavaScript insights.
          </p>
        </div>
        
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {mockPosts.map((post, index) => (
            <LinkedInPostCard 
              key={post.id} 
              post={post} 
              delay={(index + 3) * 100}
            />
          ))}
        </div>
        
        <div className="text-center mt-10 opacity-0 animate-fade-in delay-600">
          <a 
            href="https://linkedin.com/company/paderbornjs" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            View All Posts
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const LinkedInPostCard = ({ post, delay }: { post: LinkedInPost; delay: number }) => (
  <div 
    className={`glass-panel rounded-xl p-6 shadow-sm hover-card-animation delay-${delay} opacity-0 animate-fade-in`}
  >
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 rounded-full bg-primary/10 overflow-hidden flex-shrink-0">
        <div className="h-full w-full flex items-center justify-center bg-jsyellow">
          <span className="text-sm font-bold text-black">JS</span>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-baseline justify-between">
          <h3 className="font-semibold">{post.author}</h3>
          <span className="text-xs text-foreground/60">{post.date}</span>
        </div>
        
        <p className="mt-2 text-sm text-foreground/80 mb-4">
          {post.content}
        </p>
        
        {post.image && (
          <div className="mt-3 mb-4 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt="Post attachment" 
              className="w-full h-48 object-cover"
            />
          </div>
        )}
        
        <div className="flex items-center gap-4 mt-2 pt-2 border-t border-border/30">
          <div className="flex items-center gap-1 text-xs text-foreground/60">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            <span>{post.likes}</span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-foreground/60">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>{post.comments}</span>
          </div>
          
          <a 
            href="https://linkedin.com/company/paderbornjs"
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-auto text-xs text-primary hover:underline"
          >
            View on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default LinkedInFeed;
