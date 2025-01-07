import { render, screen } from '@testing-library/preact';
import App from '/src/App';

test('renders hello world', () => {
  render(<App />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
