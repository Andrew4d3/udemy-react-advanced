import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // We are going to assert that the whole div contains a "Hi there!" string somewhere
  expect(div.innerHTML).toContain('Hi there!');

  ReactDOM.unmountComponentAtNode(div);
});
