import { render, renderHook, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useInputValue } from './useInputValue';

describe('Custom Hook', () => {
  test('Check Length from Value', () => {
    const { result } = renderHook(useInputValue);
    act(() => {
      result.current.onChange({ target: { value: 'ReactJs' } });
    });

    expect(result.current.value).toHaveLength(7);
  });
  test('Check Value Correcly', () => {
    const { result } = renderHook(useInputValue);
    act(() => {
      result.current.onChange({ target: { value: 'Hello World' } });
    });

    expect(result.current.value).toBe('Hello World');
  });
});
