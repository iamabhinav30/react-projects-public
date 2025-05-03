import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from '../../../../Pages/Questions/Easy/LikeButton'; // adjust path as needed
import '@testing-library/jest-dom';

describe('LikeButton', () => {
  test('renders Like button with empty heart by default', () => {
    render(<LikeButton />);
    const button = screen.getByRole('button', { name: /like/i });

    expect(button).toBeInTheDocument();
    expect(button.querySelector('i')).toHaveClass('bi-heart');
  });

  test('shows red hover style when hovered (not liked)', () => {
    render(<LikeButton />);
    const button = screen.getByRole('button', { name: /like/i });

    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle('color: red');
    fireEvent.mouseLeave(button);
    expect(button).toHaveStyle('color: gray');
  });

  test('toggles heart icon and color on click', () => {
    render(<LikeButton />);
    const button = screen.getByRole('button', { name: /like/i });

    // Click to like
    fireEvent.click(button);
    expect(button.querySelector('i')).toHaveClass('bi-heart-fill');
    expect(button).toHaveStyle('background: red');
    expect(button).toHaveStyle('color: white');

    // Click to unlike
    fireEvent.click(button);
    expect(button.querySelector('i')).toHaveClass('bi-heart');
    expect(button).toHaveStyle('background: white');
  });
});
