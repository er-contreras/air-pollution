import React from 'react'; // eslint-disable-line
import { render, screen } from '@testing-library/react'; // eslint-disable-line
import '@testing-library/jest-dom';
// import Forecast from '../components/Forecast';
import App from '../App';

describe('Describe Section', () => {

  it('Testing 1', () => {
    const component = render(<App />);
    console.log(component.debug());
    // const wrapper = component.findByRole('#input');
    // expect(wrapper.length).toBe(1);
  });

})
