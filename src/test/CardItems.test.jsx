import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render, screen } from '@testing-library/react';
import ChatService from '../service/ChatService';
import CardItems from '../components/ChatSideBar/CardItems'

describe('<CardItems />', () => {
  
  let renderComponent
  const props = {
    users: ChatService.getUsers()
  }

  beforeEach(() => {
    renderComponent = () => render(
        <Provider store={store}>
            <CardItems {...props} />
        </Provider>
    )
  })

  it('should render card items component', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.card-items')).not.toBe(null)
    props.users.forEach((user) => {
        expect(screen.queryByText(user.name)).not.toBeNull()
    })    
  });

  it('should render all the users passed to CardItems', async () => {
    renderComponent();
    props.users.forEach((user) => {
        expect(screen.queryByText(user.name)).not.toBeNull()
    })    
  });

});