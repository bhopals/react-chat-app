import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render, screen, fireEvent } from '@testing-library/react';
import ChatService from '../service/ChatService';
import CardItem from '../components/ChatSideBar/CardItem'

describe('<CardItem />', () => {
  
  let renderComponent
  const props = {
    onClickHandler: jest.fn,
    user: ChatService.getLoggedInUser()
  }

  const onClickHandler = jest.spyOn(props, 'onClickHandler')

  beforeEach(() => {
    renderComponent = () => render(
        <Provider store={store}>
            <CardItem {...props} />
        </Provider>
    )
  })

  it('should render card item component', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.card-item')).not.toBe(null)
    expect(container.querySelector('div.profile')).not.toBe(null)
    expect(container.querySelector('div.avatar')).not.toBe(null)
    expect(container.querySelector('div.preview')).not.toBe(null)
    expect(container.querySelector('div.profile .name')).not.toBe(null)
    expect(screen.queryByText(props.user.name)).not.toBeNull()

  });

  it('should call onClickHandler when CardItem is selected', async () => {
    renderComponent();
    expect(onClickHandler).not.toHaveBeenCalled()
    fireEvent.click(screen.getByTestId('card-item-click'), {})
    expect(onClickHandler).toHaveBeenCalled()
  });

});