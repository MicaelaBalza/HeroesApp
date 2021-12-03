import { useState } from 'react';

export function useForm<TValues>(initialState: TValues): [TValues, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return [values, handleInputChange, reset];
}
