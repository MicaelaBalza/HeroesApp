import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MemoryHistory } from 'history';

export const renderWithRouter = (
  Component: React.ElementType,
  history: MemoryHistory,
  props?: any
) => {
  return render(
    <Router history={history}>
      <Component {...props} />
    </Router>
  );
};
