import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from './enzyme';

test('renders without crashing', () => {
	const app = shallow(<App/>);
	expect(app.containsAnyMatchingElements([<a>
        Learn React
      </a>
    ])
  ).toBe(true);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a header', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hack the News')).toBeInTheDocument();
})
