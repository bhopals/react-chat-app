import React from 'react';
import { Provider } from 'react-redux';

import {store} from './redux/store';
import ChatAppContainer from "./components/ChatAppContainer"

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ChatAppContainer />
      </Provider>
  </React.StrictMode>
  )
}