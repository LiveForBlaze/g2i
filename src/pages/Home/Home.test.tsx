import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';

const mockedStart = jest.fn();

test('renders Home page', () => {
  render(<Home onStart={mockedStart} isLoading={false} />)
  
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();

  const startButton = screen.getByTestId('home-begin-button');
  expect(startButton).toBeInTheDocument();
  fireEvent.click(startButton);
  expect(mockedStart).toBeCalled();
});

test('renders Home page with loading', () => {
  render(<Home onStart={mockedStart} isLoading={true} />)
  expect(screen.getByTestId('home-loading')).toHaveTextContent('Loading...');
});
