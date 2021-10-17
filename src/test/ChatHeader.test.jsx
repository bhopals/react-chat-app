import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render, screen } from '@testing-library/react';
import ChatHeader from '../components/ChatHeader'
import ChatService from '../service/ChatService';

describe('<ChatHeader />', () => {
  
  let renderComponent
  const user = ChatService.getLoggedInUser()

  beforeEach(() => {
    renderComponent = () => render(
        <Provider store={store}>
            <ChatHeader  />
        </Provider>
    )
  })

  it('should render ChatHeader component', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.chat-header')).not.toBe(null)
    expect(container.querySelector('div.left')).not.toBe(null)
    expect(container.querySelector('div.right')).not.toBe(null)

  });

  it('should render windows options circle - maximize, minimize, close icons', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('span.close')).not.toBe(null)
    expect(container.querySelector('span.minimize')).not.toBe(null)
    expect(container.querySelector('span.maximize')).not.toBe(null)
  });

  it('should render user profile data', async () => {
    let { container } = renderComponent();
    expect(screen.queryAllByText(user.name)).not.toBeNull()
    expect(container.querySelector('div.user-profile')).not.toBe(null)
    expect(container.querySelector('div.user-avatar')).not.toBe(null)
  });

});