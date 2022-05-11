import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../store/configureStore';
import RocketCard from '../rocketCard';
import '@testing-library/jest-dom';

test('@rocketCard passing @name props test', () => {
  render(
    <Provider store={store}>
      <RocketCard
        key="falcon9"
        id="falcon9"
        reservaton
        name="falcon 9"
        description="Ready for launch"
        imgUrl="https://img.png"
      />
    </Provider>,
  );
  const element = screen.getByText(/falcon 9/i);
  expect(element).toBeInTheDocument();
});

test('@rocketCard passing @reservation props test', () => {
  render(
    <Provider store={store}>
      <RocketCard
        key="falcon9"
        id="falcon9"
        reservaton={false}
        name="falcon 9"
        description="Ready for launch"
        imgUrl="https://img.png"
      />
    </Provider>,
  );
  const element = screen.getByText(/Reserved/i);
  expect(element).toBeInTheDocument();
});

test('@rocketCard passing @description props test', () => {
  render(
    <Provider store={store}>
      <RocketCard
        key="falcon9"
        id="falcon9"
        reservaton={false}
        name="falcon 9"
        description="Ready for launch"
        imgUrl="https://img.png"
      />
    </Provider>,
  );
  const element = screen.getByText(/Ready for launch/i);
  expect(element).toBeInTheDocument();
});
