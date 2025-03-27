// Import environment variables 
// In a real application, you would use a library like dotenv to load these
// const SECRET_API_KEY = 'bXktc2VjcmV0LWFwaS1rZXk=';
// Types for meetup data
export type MeetupEvent = {
  title: string;
  date: string;
  location: string;
  url: string;
  description?: string;
  attendees?: number;
  maxAttendees?: number;
};

// In a real application, this would make API calls to the Meetup API
// For this demo, we're using mock data
const mockMeetupData: MeetupEvent = {
  title: "Modern JavaScript: State of the Art 2024",
  date: "2024-07-15T19:00:00",
  location: "Zukunftsmeile 1, 33102 Paderborn",
  url: "https://meetup.com/paderbornjs",
  description: "Join us for an exciting evening exploring the latest trends and features in the JavaScript ecosystem. We'll cover ES2024 features, performance optimization techniques, and modern frameworks.",
  attendees: 32,
  maxAttendees: 50
};

// Helper function to get API key from environment variables with validation
const getMeetupApiKey = (): string => {
  const apiKey = import.meta.env.VITE_MEETUP_API_KEY;
  if (!apiKey) {
    console.error('MEETUP_API_KEY environment variable is not set');
    // In a production app, you might want to throw an error or handle this differently
  }
  return apiKey;
};

// Function to get meetup data
export const getMeetupData = async (): Promise<MeetupEvent> => {
  try {
    // Get API key securely from environment variable
    const apiKey = getMeetupApiKey();
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real app, this would be replaced with actual API call
    // Example with proper authentication:
    // const response = await fetch('https://api.meetup.com/paderbornjs/events?page=1', {
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`,
    //     'Content-Type': 'application/json'
    //   }
    // });
    // if (!response.ok) {
    //   throw new Error(`Meetup API error: ${response.status}`);
    // }
    // const data = await response.json();
    // return data[0];
    
    return mockMeetupData;
  } catch (error) {
    console.error('Error fetching meetup data:', error);
    // Return fallback data or throw an error based on your app's needs
    return mockMeetupData;
  }
};

// Function to get past meetups
export const getPastMeetups = async (): Promise<MeetupEvent[]> => {
  try {
    // Get API key securely from environment variable
    const apiKey = getMeetupApiKey();
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real app, this would be replaced with actual API call
    // Example with proper authentication:
    // const response = await fetch('https://api.meetup.com/paderbornjs/events?status=past&page=5', {
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`,
    //     'Content-Type': 'application/json'
    //   }
    // });
    // if (!response.ok) {
    //   throw new Error(`Meetup API error: ${response.status}`);
    // }
    // return await response.json();
    
    return [
      {
        title: "TypeScript Deep Dive",
        date: "2024-04-10T19:00:00",
        location: "Digital Hub, Paderborn",
        url: "https://meetup.com/paderbornjs/events/past",
        attendees: 45,
        maxAttendees: 50
      },
      {
        title: "React Performance Optimization",
        date: "2024-03-15T18:30:00",
        location: "Zukunftsmeile 1, 33102 Paderborn",
        url: "https://meetup.com/paderbornjs/events/past",
        attendees: 38,
        maxAttendees: 40
      },
      {
        title: "NodeJS Best Practices",
        date: "2024-02-20T19:00:00",
        location: "Digital Hub, Paderborn",
        url: "https://meetup.com/paderbornjs/events/past",
        attendees: 30,
        maxAttendees: 40
      }
    ];
  } catch (error) {
    console.error('Error fetching past meetups:', error);
    // Return fallback data or throw an error based on your app's needs
    return [];
  }
}; 