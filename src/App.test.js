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

/*
  So what are we doing here?
  1. First we run "npm run test" at the terminal.
  2. Then Jest test runner starts up
  3. It will go through all the *.test.js files inside the src folder and execute the tests inside of them
  4. It will print the results
  5. After printing the results, the Jest runner will keep watching the files for changes and re-executing the tests on the files that change.
*/