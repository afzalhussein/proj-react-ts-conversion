import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CounterButtonContainer from './CounterButtonContainer';

// Mock CSS module
jest.mock('./CounterButtonContainer.module.css', () => ({
    counter_buttons: 'counter-buttons-mock',
    button_counter: 'button-counter-mock'
}));
describe('CounterButtonContainer', () => {
    const mockHandleClick = jest.fn();

    beforeEach(() => {
        mockHandleClick.mockClear();
    });

    it('renders increment and decrement buttons', () => {
        render(<CounterButtonContainer handleClick={mockHandleClick} />);

        expect(screen.getByRole('button', { name: /increment/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /decrement/i })).toBeInTheDocument();
    });

    it('calls handleClick with increment function when increment button is clicked', () => {
        render(<CounterButtonContainer handleClick={mockHandleClick} />);

        fireEvent.click(screen.getByRole('button', { name: /increment/i }));
        expect(mockHandleClick).toHaveBeenCalledTimes(1);

        const incrementFunction = mockHandleClick.mock.calls[0][0];
        expect(incrementFunction(5)).toBe(6);
    });

    it('calls handleClick with decrement function when decrement button is clicked', () => {
        render(<CounterButtonContainer handleClick={mockHandleClick} />);

        fireEvent.click(screen.getByRole('button', { name: /decrement/i }));
        expect(mockHandleClick).toHaveBeenCalledTimes(1);

        const decrementFunction = mockHandleClick.mock.calls[0][0];
        expect(decrementFunction(5)).toBe(4);
    });

    it('has the correct container class', () => {
        const { container } = render(<CounterButtonContainer handleClick={mockHandleClick} />);
        expect(container.querySelector('.counter-buttons-mock')).toBeInTheDocument();
    });

    it('buttons have the correct class', () => {
        render(<CounterButtonContainer handleClick={mockHandleClick} />);
        const buttons = screen.getAllByRole('button');

        buttons.forEach(button => {
            expect(button).toHaveClass('button-counter-mock');
        });
    });
});