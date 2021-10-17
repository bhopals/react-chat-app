import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';
import { render } from '@testing-library/react';

import ChatBody from '../components/ChatBody'

describe('<ChatBody />', () => {
  
  let renderComponent
  beforeEach(() => {
    renderComponent = (props) => render(
      <Provider store={store}>
        <ChatBody {...props} />
      </Provider>
    )
  })

  it('should render chat body container', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.chat-body')).not.toBe(null)
  });

});

