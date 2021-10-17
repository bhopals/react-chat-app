import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';

import { render, screen, fireEvent } from '@testing-library/react';
import ChatBodyWriteText from '../components/ChatBody/ChatBodyWriteText'

describe('<ChatBodyWriteText />', () => {
  
  let renderComponent
  const props = {
    onDispatchHandler: jest.fn
  }

  const onDispatchHandler = jest.spyOn(props, 'onDispatchHandler')

  beforeEach(() => {
    renderComponent = () => render(
        <Provider store={store}>
            <ChatBodyWriteText {...props} />
        </Provider>
    )
  })

  it('should render card item component', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.chat-body-write-text')).not.toBe(null)
    expect(container.querySelector('div.chat-body-write-text-area')).not.toBe(null)
    expect(container.querySelector('div.chat-body-write-text-buttons')).not.toBe(null)
    expect(container.querySelector('div.write-message-icon')).not.toBe(null)
    expect(container.querySelector('div.microphone-icon')).not.toBe(null)
  });

  it('should call onDispatchHandler if user hits Enter', async () => {
    renderComponent();
    expect(onDispatchHandler).not.toHaveBeenCalled()
    fireEvent.change(screen.getByTestId('chat-message-id'), { target: { value: 'Hi, How are you doing?' } })
    fireEvent.click(screen.getByTestId('chat-message-send-id'), {})
    expect(onDispatchHandler).toHaveBeenCalled()
  });

});