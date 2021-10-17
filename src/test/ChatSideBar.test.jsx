import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render } from '@testing-library/react';
import ChatService from '../service/ChatService';
import ChatSideBar from '../components/ChatSideBar'

describe('<ChatSideBar />', () => {
  
  let renderComponent
 
  beforeEach(() => {
    renderComponent = () => render(
        <Provider store={store}>
            <ChatSideBar  />
        </Provider>
    )
  })

  it('should render chat body component', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.chat-side-bar')).not.toBe(null)
  });

});