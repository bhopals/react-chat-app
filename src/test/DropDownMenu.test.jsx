import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render, screen, fireEvent } from '@testing-library/react';
import ChatService from '../service/ChatService';
import DropDownMenu from '../components/DropDownMenu'

describe('<DropDownMenu />', () => {
  
  let renderComponent
  const props = {
    user: ChatService.getLoggedInUser()
  }

  beforeEach(() => {
    renderComponent = () => render(
      <DropDownMenu {...props} />
    )
  })

  it('should render DropDownMenu component', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.drop-down-menu-container')).not.toBe(null)
    expect(container.querySelector('div.down-arrow-icon')).not.toBe(null)
    expect(container.querySelector('ul.user-profile')).not.toBe(null)
    expect(container.querySelector('span.messages-count')).not.toBe(null)
  });

  it('should render user profile data', async () => {
    renderComponent();
    const { user } = props
    expect(screen.queryAllByText(user.email)).not.toBeNull()
    expect(screen.queryAllByText(user.name)).not.toBeNull()
    expect(screen.queryAllByText(user.username)).not.toBeNull()
    expect(screen.queryAllByText(user.messages.length)).not.toBeNull()
    expect(screen.queryAllByText(user.lastSeen)).not.toBeNull()
  });

});