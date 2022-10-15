import FormCoding from './FormCoding';
import {render, screen} from '@testing-library/react'

describe('Form', () => {
  test('Renders Correctly', () => {
    render(<FormCoding/>);
    const comboboxElement = screen.getByRole('combobox');
    expect(comboboxElement).toBeInTheDocument()
  });
  test('Renders Length Input', () => {
    render(<FormCoding/>);
    const textboxElement = screen.getAllByRole('textbox');
    expect(textboxElement).toHaveLength(3)
  });
  
});
