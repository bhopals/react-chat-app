import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render } from '@testing-library/react';
import ChatService from '../service/ChatService';
import ChatBodyText from '../components/ChatBody/ChatBodyText'

describe('<ChatBodyText />', () => {
  
  let renderComponent
  const props = {
    messages: ChatService.getLoggedInUser().messages
  }

  beforeEach(() => {
    renderComponent = () => render(
        <Provider store={store}>
            <ChatBodyText {...props} />
        </Provider>
    )
  })

  it('should render chat body component', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.chat-body-text')).not.toBe(null)
  });

});