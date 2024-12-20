import { render, screen } from '@testing-library/react';
import App from './App';
import Privacy from './Components/Privacy&Policy/index';

test('renders learn react link', () => {
  render(<App />);

<Privacy/>

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
