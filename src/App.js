import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from './store/Store';

import Todo from './pages/Todo';

function App() {
  return (
    <StoreProvider store={store}>
      <Todo />
    </StoreProvider>
  );
}

export default App;
