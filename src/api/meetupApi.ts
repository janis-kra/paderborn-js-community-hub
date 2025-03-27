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

// Function to get meetup data
export const getMeetupData = async (): Promise<MeetupEvent> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, this would be replaced with actual API call
  // Example: const response = await fetch('https://api.meetup.com/paderbornjs/events?page=1');
  // const data = await response.json();
  // return data[0];
  
  return mockMeetupData;
};

// Function to get past meetups
export const getPastMeetups = async (): Promise<MeetupEvent[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, this would be replaced with actual API call
  // Example: const response = await fetch('https://api.meetup.com/paderbornjs/events?status=past&page=5');
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
}; 