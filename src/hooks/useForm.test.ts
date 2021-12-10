import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from './useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'fernando',
    email: 'fernando@gmail.com'
  };
  
  test('Debe regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });
  test('Debe cambiar el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    const event = { target: { name: 'name', value: 'Micaela'}};
    act(() => {
      handleInputChange(event);
    });
    expect(result.current[0]).toEqual({...initialForm, name: 'Micaela'});
  });
  test('Debe reestablecer el formulario con reset', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    const event = { target: { name: 'name', value: 'Micaela'}};
    act(() => {
      handleInputChange(event);
      reset();
    });
    expect(result.current[0]).toEqual(initialForm);
  });
});
