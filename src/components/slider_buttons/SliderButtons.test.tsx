import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SliderButtons from './SliderButtons';

// Simple mock for rc-slider
jest.mock('rc-slider', () => {
    return function MockSlider({ value, onChange, min, max, step }: any) {
        return (
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
        );
    };
});

describe('SliderButtons', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    it('renders with default props', () => {
        render(<SliderButtons value={50} onChange={mockOnChange} />);

        expect(screen.getByText('Decrease')).toBeInTheDocument();
        expect(screen.getByText('Increase')).toBeInTheDocument();
        expect(screen.getByTestId('mock-slider')).toHaveValue('50');
    });

    it('calls onChange with decreased value when decrease button is clicked', () => {
        render(<SliderButtons value={50} onChange={mockOnChange} />);

        fireEvent.click(screen.getByText('Decrease').closest('button')!);
        expect(mockOnChange).toHaveBeenCalledWith(49);
    });

    it('calls onChange with increased value when increase button is clicked', () => {
        render(<SliderButtons value={50} onChange={mockOnChange} />);

        fireEvent.click(screen.getByText('Increase').closest('button')!);
        expect(mockOnChange).toHaveBeenCalledWith(51);
    });

    it('handles slider change', () => {
        render(<SliderButtons value={50} onChange={mockOnChange} />);

        const slider = screen.getByTestId('mock-slider');
        fireEvent.change(slider, { target: { value: '60' } });
        expect(mockOnChange).toHaveBeenCalledWith(60);
    });

    describe('Fallback behavior', () => {
        beforeEach(() => {
            jest.resetModules();
        });

        it('renders fallback arrows when react-icons fails', async () => {
            jest.doMock('react-icons/fa', () => {
                throw new Error('Module not found');
            }, { virtual: true });

            const { default: SliderWithFallback } = await import('./SliderButtons');
            render(<SliderWithFallback value={50} onChange={mockOnChange} />);

            expect(screen.getByText('Decrease')).toBeInTheDocument();
            expect(screen.getByText('Increase')).toBeInTheDocument();
        });
    });

    describe('Error handling and edge cases', () => {
        it('handles minimum boundary correctly', () => {
            render(<SliderButtons value={0} onChange={mockOnChange} min={0} />);
            const decreaseButton = screen.getByText('Decrease').closest('button');
            expect(decreaseButton).toBeDisabled();
        });

        it('handles maximum boundary correctly', () => {
            render(<SliderButtons value={100} onChange={mockOnChange} max={100} />);
            const increaseButton = screen.getByText('Increase').closest('button');
            expect(increaseButton).toBeDisabled();
        });

        it('handles array values from slider', async () => {
            // Clear previous mocks
            jest.resetModules();

            // Mock rc-slider to return array values
            jest.doMock('rc-slider', () => {
                return function MockSlider({ onChange }: any) {
                    // Create a ref to store the onChange handler
                    const onChangeRef = React.useRef(onChange);
                    onChangeRef.current = onChange;

                    React.useEffect(() => {
                        // Simulate initial render with array value
                        onChangeRef.current && onChangeRef.current([60]);
                    }, []);

                    return (
                        <input
                            type="range"
                            role="slider"
                            data-testid="mock-slider"
                            onChange={() => onChangeRef.current && onChangeRef.current([60])}
                        />
                    );
                };
            }, { virtual: true });

            // Need to re-import after mocking
            const { default: Slider } = await import('./SliderButtons');
            render(<Slider value={50} onChange={mockOnChange} />);

            // Verify the initial call
            expect(mockOnChange).toHaveBeenCalledWith(60);

            // Clear the mock to test the change event
            mockOnChange.mockClear();

            // Trigger change event with a more realistic event object
            fireEvent.change(screen.getByTestId('mock-slider'), {
                target: { value: '60' }
            });

            expect(mockOnChange).toHaveBeenCalledWith(60);
        });
    });
});