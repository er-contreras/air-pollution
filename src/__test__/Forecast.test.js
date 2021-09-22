import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Forecast from '../components/Forecast';
import { HashRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

const MockForecast = () => {
  return (
    <HashRouter>
      <Forecast />
    </HashRouter>
  )
}

const mockSetSearchBar = jest.fn()

describe('Test and Render "Forecast" component', () => {
  describe('Unit Test', () => {

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
      fireEvent.change(inputElement, { target: { value: "Mexico" } })
      expect(inputElement.value).toBe("Mexico");
    })
  })

  describe('Integration test', () => {
    it('Should redirect and update history', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <Forecast />
        </Router>
      )
      userEvent.click(screen.getByTestId('link-0'))
      expect(history.location.pathname).toEqual('/details')
    })

    it('Should redirect and update dom', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <Forecast />
        </Router>
      )
      userEvent.click(screen.getByTestId('link-0'))
      expect(history.location.state.name).toEqual('Mexico')
    })
  })
})


