import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Badge from '../Badge';

describe('Badge', () => {
  afterEach(cleanup);

  it('renders correctly in the DOM', () => {
    const tree = renderer.create(<Badge />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with the given classNames', () => {
    render(<Badge twClasses="bg-red-500" />);

    const badge = screen.getByTestId('badge');
    const { classList } = badge;

    expect(classList).toContain('bg-red-500');
  });

  it('renders with the correct text', () => {
    render(<Badge text="My-Badge" />);

    const badge = screen.getByTestId('badge');

    expect(badge.textContent).toContain('My-Badge');
  });
});
