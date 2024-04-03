import { render, screen } from '@testing-library/react';
import { AppProviders } from '../providers/AppProviders';
import { MuiMode } from './mui-mode';

describe('MuiMode', () => {
  test('renders test correctly', () => {
    render(<MuiMode />, { wrapper: AppProviders });
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
