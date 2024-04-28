import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button component', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<Button title="Press Me" />);
    const buttonElement = getByText('Press Me');
    expect(buttonElement).toBeTruthy();
  });

  it('executes onPress callback when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<Button title="Press Me" onPress={mockOnPress} />);
    const buttonElement = getByText('Press Me');
    fireEvent.press(buttonElement);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const { toJSON } = render(<Button title="Press Me" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
