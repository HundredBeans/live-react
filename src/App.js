import React from 'react';
import logo from './logo.svg';
import MainRoute from './routes/main-route';
import { Provider } from "unistore/react";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </div>
  );
}

export default App;
