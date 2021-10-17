import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render, screen, fireEvent } from '@testing-library/react';
import ChatService from '../service/ChatService';
import SearchItems from '../components/ChatSideBar/SearchItems'

describe('<SearchItems />', () => {
  
  let renderComponent
  const props = {
    onSearchChange: jest.fn,
    user: ChatService.getLoggedInUser()
  }

  const onSearchChange = jest.spyOn(props, 'onSearchChange')

  beforeEach(() => {
    renderComponent = () => render(
        <Provider store={store}>
            <SearchItems {...props} />
        </Provider>
    )
  })

  it('should render Search Item component', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.chat-side-bar-search')).not.toBe(null)
    expect(container.querySelector('div.search-box')).not.toBe(null)
    expect(container.querySelector('div.chat-app-icon')).not.toBe(null)
    expect(container.querySelector('div.search-icon')).not.toBe(null)
    expect(container.querySelector('div.compose-message-icon')).not.toBe(null)
  });

  it('should call onSearchChange when search text is entered', async () => {
    renderComponent();
    expect(onSearchChange).not.toHaveBeenCalled()
    fireEvent.change(screen.getByTestId('search-items'), { target: { value: 'Tyler' } })
    expect(onSearchChange).toHaveBeenCalled()
  });

});