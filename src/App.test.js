import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a header', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hack the News')).toBeInTheDocument();
})
