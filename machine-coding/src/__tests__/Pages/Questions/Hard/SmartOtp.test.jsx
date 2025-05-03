import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SmartOtp from '../../../../Pages/Questions/Hard/SmartOTP';

describe('SmartOTP', () => {
  test('renders Like button with empty heart by default', () => {
    render(<SmartOtp />);
  });
})