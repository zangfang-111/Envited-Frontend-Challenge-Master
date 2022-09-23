import React from 'react';
import { render, screen } from '@testing-library/react';

import Landing from '../components/landing';

describe('renders landing page', () => {
  it('should render the description', () => {
    render(<Landing />);
    const element = screen.getByText('Imagine if');

    expect(element).toBeInTheDocument();
  });

  it('should renders the create event button', async () => {
    render(<Landing />);

    const element = screen.getByTestId('create-event');
    expect(element).toBeInTheDocument();
  });
});
