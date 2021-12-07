import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryHistory } from 'history';

export const renderWithRouter = (
  Component: React.ElementType,
  history: MemoryHistory,
  props?: any
) => {
  return render(
    <Router>
      <Component {...props} />
    </Router>
  );
};
