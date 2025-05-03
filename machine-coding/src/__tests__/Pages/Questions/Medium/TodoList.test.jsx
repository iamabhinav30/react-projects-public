import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../../../../Pages/Questions/Medium/TodoList';

describe('Todo List', () => {
  test('renders Like button with empty heart by default', () => {
    render(<TodoList />);
  });
})