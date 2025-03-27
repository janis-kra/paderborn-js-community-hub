// Types for LinkedIn data
export type LinkedInPost = {
  id: string;
  date: string;
  author: string;
  content: string;
  likes: number;
  comments: number;
  image?: string;
};

// In a real application, this would make API calls to the LinkedIn API
// For this demo, we're using mock data
const mockLinkedInPosts: LinkedInPost[] = [
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

// Helper function to get API token from environment variables with validation
const getLinkedInApiToken = (): string => {
  const apiToken = import.meta.env.VITE_LINKEDIN_API_TOKEN;
  if (!apiToken) {
    console.error('LINKEDIN_API_TOKEN environment variable is not set');
    // In a production app, you might want to throw an error or handle this differently
  }
  return apiToken;
};

// Function to get LinkedIn posts
export const getLinkedInPosts = async (): Promise<LinkedInPost[]> => {
  try {
    // Get API token securely from environment variable
    const apiToken = getLinkedInApiToken();
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real app, this would be replaced with actual API call with proper authentication
    // Example: 
    // const response = await fetch('https://api.linkedin.com/v2/activitystreams/...', {
    //   headers: {
    //     'Authorization': `Bearer ${apiToken}`,
    //     'Content-Type': 'application/json'
    //   }
    // });
    // if (!response.ok) {
    //   throw new Error(`LinkedIn API error: ${response.status}`);
    // }
    // return await response.json();
    
    return mockLinkedInPosts;
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    // Return fallback data or throw an error based on your app's needs
    return [];
  }
};

// Real implementation of authentication - using environment variables instead of hardcoded values
export const getLinkedInPostsWithAuth = async (): Promise<LinkedInPost[]> => {
  try {
    // Get token from environment variable
    const token = getLinkedInApiToken();
    
    // Make authenticated request
    const response = await fetch('https://api.linkedin.com/v2/activitystreams/...', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`LinkedIn API error: ${response.status}`);
    }
    
    const data = await response.json();
    return transformLinkedInData(data); // Transform to our internal format
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return []; // Return empty array as fallback
  }
};

// Define types for LinkedIn API response
type LinkedInApiResponse = {
  elements: Array<{
    id: string;
    created: {
      time: number; // timestamp
    };
    author: {
      name: string;
    };
    content: {
      text: string;
    };
    socialActivity: {
      likeCount: number;
      commentCount: number;
    };
    media?: {
      url: string;
    }[];
  }>;
};

function transformLinkedInData(data: LinkedInApiResponse): LinkedInPost[] {
  // Transform LinkedIn API response to our internal format
  return data.elements.map(item => ({
    id: item.id,
    date: new Date(item.created.time).toLocaleString(),
    author: item.author.name,
    content: item.content.text,
    likes: item.socialActivity.likeCount,
    comments: item.socialActivity.commentCount,
    image: item.media?.[0]?.url
  }));
} 