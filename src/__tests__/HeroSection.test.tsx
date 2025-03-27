import { render, screen } from '@testing-library/react';
import HeroSection from '../components/HeroSection';

// Mock the meetup data that would be fetched from the API
jest.mock('../api/meetupApi', () => ({
  getMeetupData: jest.fn().mockResolvedValue({
    title: "Modern JavaScript: State of the Art 2024",
    date: "2024-07-15T19:00:00",
    location: "Zukunftsmeile 1, 33102 Paderborn",
    url: "https://meetup.com/paderbornjs",
  })
}));

describe('HeroSection', () => {
  test('renders welcome message', () => {
    render(<HeroSection />);
    const welcomeElement = screen.getByText(/Welcome to/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders next meetup information', () => {
    render(<HeroSection />);
    const meetupTitle = screen.getByText(/Modern JavaScript: State of the Art 2024/i);
    expect(meetupTitle).toBeInTheDocument();
    
    const locationElement = screen.getByText(/Zukunftsmeile 1, 33102 Paderborn/i);
    expect(locationElement).toBeInTheDocument();
  });

  test('renders call to action buttons', () => {
    render(<HeroSection />);
    const ourMeetupsButton = screen.getByText(/Our Meetups/i);
    expect(ourMeetupsButton).toBeInTheDocument();
    
    const joinUsButton = screen.getByText(/Join Us/i);
    expect(joinUsButton).toBeInTheDocument();
  });
}); 