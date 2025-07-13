import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Library CRUD App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Library CRUD App/i);
  expect(headingElement).toBeInTheDocument();
});
