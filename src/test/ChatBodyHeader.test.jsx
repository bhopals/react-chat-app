import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render, screen } from '@testing-library/react';
import ChatService from '../service/ChatService';
import ChatBodyHeader from '../components/ChatBody/ChatBodyHeader'

describe('<CardItem />', () => {
  
  let renderComponent
  const props = {
    user: ChatService.getLoggedInUser()
  }

  beforeEach(() => {
    renderComponent = () => render(
        <Provider store={store}>
            <ChatBodyHeader {...props} />
        </Provider>
    )
  })

  it('should render ChatBody Header', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.chat-body-header')).not.toBe(null)
    expect(container.querySelector('div.chat-body-user-profile')).not.toBe(null)
    expect(container.querySelector('div.chat-body-avatar')).not.toBe(null)
    expect(container.querySelector('div.chat-body-title')).not.toBe(null)
    expect(container.querySelector('div.chat-body-actions')).not.toBe(null)
    expect(screen.queryByText(props.user.name)).not.toBeNull()

  });

  it('should render chat action buttons - Call, Message, and Video', async () => {
    renderComponent();
    expect(screen.getByTestId('chat-body-message')).not.toBe(null)
    expect(screen.getByTestId('chat-body-video')).not.toBe(null)
    expect(screen.getByTestId('chat-body-call')).not.toBe(null)
  });

});