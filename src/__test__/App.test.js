import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Testing Rendering "App" component', () => {

  it('Look for String "Current Air Pollution in the component"', () => {
    const component = render(<App />);
    // console.log(component.debug());
    const whatever = screen.getByText(/Current Air Pollution/i);
    expect(whatever).toBeInTheDocument();
  });

  it('Look for String "AIR POLLUTION INDEX BY COUNTRY"', () => {
    render(<App />);
    const whatever = screen.getByText(/AIR POLLUTION INDEX BY COUNTRY/i);
    expect(whatever).toBeInTheDocument();
  });

  it('Not Look for String "AIR POLLUTION INDEX BY NAME"', () => {
    render(<App />);
    const whatever = screen.queryByText(/AIR POLLUTION INDEX BY NAME/i);
    expect(whatever).not.toBeInTheDocument();
  });

  it('Not Look for String "AIR POLLUTION INDEX BY NAME"', async () => {
    render(<App />);
    const whatever = screen.getAllByRole("search");
    expect(whatever.length).toBe(2);
  });

  // it('Look ASYNC Country name', async () => {
  //   render(<App />);
  //   // console.log(component.debug());
  //   const whatever3 = await screen.findAllByText(/Mexico/i);
  //   expect(whatever3).toBeInTheDocument();
  // });

})
