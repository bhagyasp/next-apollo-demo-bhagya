import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../about';

test('renders About details', () => {
    render(<About/>);
    const linkElement = screen.getByTestId(/goBack/i);
    expect(linkElement).toBeInTheDocument();
})
