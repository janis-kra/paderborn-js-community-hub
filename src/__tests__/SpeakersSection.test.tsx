import { render, screen } from '@testing-library/react';
import SpeakersSection from '../components/SpeakersSection';

describe('SpeakersSection', () => {
  test('renders section title', () => {
    render(<SpeakersSection />);
    const titleElement = screen.getByText(/Meet Our Community Speakers/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders speaker profiles', () => {
    render(<SpeakersSection />);
    
    // Check if Anna Schmidt is rendered
    const annaSpeaker = screen.getByText(/Anna Schmidt/i);
    expect(annaSpeaker).toBeInTheDocument();
    
    // Check if Michael Chen is rendered
    const michaelSpeaker = screen.getByText(/Michael Chen/i);
    expect(michaelSpeaker).toBeInTheDocument();
    
    // Check if Sarah Johnson is rendered
    const sarahSpeaker = screen.getByText(/Sarah Johnson/i);
    expect(sarahSpeaker).toBeInTheDocument();
  });

  test('renders upcoming speaker information', () => {
    render(<SpeakersSection />);
    
    const upcomingTitle = screen.getByText(/Upcoming Speaker/i);
    expect(upcomingTitle).toBeInTheDocument();
    
    const presentationTitle = screen.getByText(/CI\/CD for JavaScript Projects/i);
    expect(presentationTitle).toBeInTheDocument();
    
    const speakerName = screen.getByText(/David Wilson/i);
    expect(speakerName).toBeInTheDocument();
  });

  test('renders past presentations section', () => {
    render(<SpeakersSection />);
    
    const pastSectionTitle = screen.getByText(/Past Presentations/i);
    expect(pastSectionTitle).toBeInTheDocument();
    
    // Check if presentations are rendered
    const typescriptTalk = screen.getByText(/Advanced TypeScript Patterns/i);
    expect(typescriptTalk).toBeInTheDocument();
    
    const nodeTalk = screen.getByText(/Building Scalable Node.js Services/i);
    expect(nodeTalk).toBeInTheDocument();
    
    const a11yTalk = screen.getByText(/Accessibility in React Applications/i);
    expect(a11yTalk).toBeInTheDocument();
  });
}); 