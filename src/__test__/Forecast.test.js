import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Forecast from '../components/Forecast';
import { HashRouter } from 'react-router-dom';

const MockForecast = () => {
  return (
    <HashRouter>
      <Forecast />
    </HashRouter>
  )
}

const mockSetSearchBar = jest.fn()

describe('Test and Render "Forecast" component', () => {
  it('Look for String "Current Air Pollution in the component"', () => {
    render(<MockForecast />);
    const title = screen.getByText(/Current Air Pollution/i);
    expect(title).toBeInTheDocument();
  });

  it('Look for String "AIR POLLUTION INDEX BY COUNTRY"', () => {
    render(<MockForecast />);
    const subtitle = screen.getByText(/AIR POLLUTION INDEX BY COUNTRY/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('Test the searchbox in the component', () => {
    render(<MockForecast />);
    const searchbox = screen.getAllByRole('searchbox');
    expect(searchbox.length).toBe(1);
  });

  it('should render input element', () => {
    render(
      <MockForecast 
        searchBar={''}
        setSearchBar={mockSetSearchBar}
      />
    )
    const inputElement = screen.getByPlaceholderText(/By Country.../i);
    fireEvent.change(inputElement, { target: { value: "Mexico"} })
    expect(inputElement.value).toBe("Mexico");
  })
})


