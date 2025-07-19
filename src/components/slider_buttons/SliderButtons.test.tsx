import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SliderButtons from './SliderButtons';

// Mock rc-slider
jest.mock('rc-slider', () => ({
    __esModule: true,
    default: ({ value, onChange, min, max, step }: any) => (
        <input
            type="range"
            role="slider"
            data-testid="mock-slider"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    )
}));

describe('SliderButtons', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        mockOnChange.mockClear();
        jest.resetModules();
    });

    it('renders with default props', () => {
        render(<SliderButtons value={50} onChange={mockOnChange} />);

        expect(screen.getByText('Decrease')).toBeInTheDocument();
        expect(screen.getByText('Increase')).toBeInTheDocument();
        expect(screen.getByTestId('mock-slider')).toHaveValue('50');
    });

    it('calls onChange with decreased value when decrease button is clicked', () => {
        render(<SliderButtons value={50} onChange={mockOnChange} />);

        fireEvent.click(screen.getByText('Decrease'));
        expect(mockOnChange).toHaveBeenCalledWith(49);
    });

    it('calls onChange with increased value when increase button is clicked', () => {
        render(<SliderButtons value={50} onChange={mockOnChange} />);

        fireEvent.click(screen.getByText('Increase'));
        expect(mockOnChange).toHaveBeenCalledWith(51);
    });

    it('handles slider change', () => {
        render(<SliderButtons value={50} onChange={mockOnChange} />);

        const slider = screen.getByTestId('mock-slider');
        fireEvent.change(slider, { target: { value: '60' } });
        expect(mockOnChange).toHaveBeenCalledWith(60);
    });

    describe('Fallback behavior', () => {
        it('renders fallback arrows when react-icons fails', async () => {
            // Mock react-icons to throw error
            jest.doMock('react-icons/fa', () => {
                throw new Error('Module not found');
            }, { virtual: true });

            // Need to dynamically import after mocking
            const { default: SliderWithFallback } = await import('./SliderButtons');
            const { container } = render(<SliderWithFallback value={50} onChange={mockOnChange} />);

            // Verify buttons render
            expect(screen.getByText('Decrease')).toBeInTheDocument();
            expect(screen.getByText('Increase')).toBeInTheDocument();

            // More reliable way to check for fallback arrows
            const buttons = screen.getAllByRole('button');
            expect(buttons[0].querySelector('span')).toBeInTheDocument(); // Fallback arrow
            expect(buttons[1].querySelector('span')).toBeInTheDocument(); // Fallback arrow
        });
    });
});