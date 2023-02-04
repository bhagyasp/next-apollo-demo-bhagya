import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import User from '../user';
import { ApolloProvider } from '@apollo/client'



test('renders user details', () => {
    render(<User/>);
    const linkElement = screen.getByTestId(/goBack/i);
    expect(linkElement).toBeInTheDocument();
})
