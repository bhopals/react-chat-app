import React from 'react';
import { Provider } from 'react-redux';
import {store} from './../redux/store';
import { render } from '@testing-library/react';

import ChatAppContainer from '../components/ChatAppContainer'

describe('<ChatAppContainer />', () => {
  
  let renderComponent
  beforeEach(() => {
    renderComponent = (props) => render(
      <Provider store={store}>
        <ChatAppContainer {...props} />
      </Provider>
    )
  })

  it('should render chat app MAIN container', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.chat-app-container')).not.toBe(null)
  });

  it('should render chat app HEADER container', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.header-container')).not.toBe(null)
  });

  it('should render chat app SIDEBAR (Left Panel) container', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.body-container')).not.toBe(null)
    expect(container.querySelector('div.panel.left-panel')).not.toBe(null)
  });

  it('should render chat BODY (Right Panel) container', async () => {
    let { container } = renderComponent();
    expect(container.querySelector('div.body-container')).not.toBe(null)
    expect(container.querySelector('div.panel.right-panel')).not.toBe(null)
  });

});

