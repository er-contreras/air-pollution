import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(
    <a href="#/details">
      <div className="Forecast_countriesContainer__3edom">
        <img
          className="Forecast_country__4fZi2"
          alt="Mexico"
          src="/static/media/mexico.ffe76d9b.png"
        />
        <h2>Mexico</h2>
      </div>
    </a>,
  );

  userEvent.click(screen.getByText('Mexico'));
  expect(screen.getByText('Mexico')).toBeInTheDocument();
});
