import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import LinkedInFeed from '../components/LinkedInFeed';
import * as linkedinApi from '../api/linkedinApi';

// Mock the linkedinApi module
vi.mock('../api/linkedinApi', () => ({
  getLinkedInPosts: vi.fn()
}));

describe('LinkedInFeed Component', () => {
  const mockPosts = [
    {
      id: "post1",
      date: "2 days ago",
      author: "PaderbornJS",
      content: "Test post content 1",
      likes: 24,
      comments: 5
    },
    {
      id: "post2",
      date: "1 week ago",
      author: "PaderbornJS",
      content: "Test post content 2",
      likes: 32,
      comments: 8,
      image: "https://example.com/image.jpg"
    },
    {
      id: "post3",
      date: "2 weeks ago",
      author: "PaderbornJS",
      content: "Test post content 3",
      likes: 18,
      comments: 12
    }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders loading state initially', () => {
    vi.mocked(linkedinApi.getLinkedInPosts).mockImplementation(
      () => new Promise(resolve => setTimeout(() => resolve([]), 500))
    );

    render(<LinkedInFeed />);
    
    // Check for loading indicator
    expect(screen.getByText(/latest from linkedin/i)).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders LinkedIn posts when loaded successfully', async () => {
    vi.mocked(linkedinApi.getLinkedInPosts).mockResolvedValue(mockPosts);

    render(<LinkedInFeed />);
    
    // Wait for the posts to load
    await waitFor(() => {
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });
    
    // Check if posts are rendered
    expect(screen.getByText('Test post content 1')).toBeInTheDocument();
    expect(screen.getByText('Test post content 2')).toBeInTheDocument();
    expect(screen.getByText('Test post content 3')).toBeInTheDocument();
    
    // Check if like and comment counts are displayed
    expect(screen.getAllByText('24')[0]).toBeInTheDocument();
    expect(screen.getAllByText('5')[0]).toBeInTheDocument();
    
    // Check for the "View All Posts" link
    expect(screen.getByText('View All Posts')).toBeInTheDocument();
  });

  test('renders error message when API call fails', async () => {
    vi.mocked(linkedinApi.getLinkedInPosts).mockRejectedValue(new Error('API Error'));

    render(<LinkedInFeed />);
    
    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText('Failed to load LinkedIn posts')).toBeInTheDocument();
    });
    
    // Check for the suggestion to visit LinkedIn directly
    expect(screen.getByText(/please check back later or visit our linkedin page directly/i)).toBeInTheDocument();
  });

  test('renders empty state when no posts are returned', async () => {
    vi.mocked(linkedinApi.getLinkedInPosts).mockResolvedValue([]);

    render(<LinkedInFeed />);
    
    // Wait for the content to load
    await waitFor(() => {
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });
    
    // Check for the empty state message
    expect(screen.getByText('No posts found.')).toBeInTheDocument();
  });
}); 