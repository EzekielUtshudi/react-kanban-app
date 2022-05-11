import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
  afterEach(cleanup);

  it('renders correctly in the DOM', () => {
    const tree = renderer
      .create(<Button id="button-id" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with the given classNames', () => {
    render(
      <Button id="button-id" twClasses="bg-red-500" />,
    );

    const button = screen.getByRole('button');
    const { classList } = button;

    expect(classList).toContain('bg-red-500');
  });

  it('renders with the correct text', () => {
    render(<Button id="button-id" text="My-Button" />);

    const button = screen.getByRole('button');

    expect(button.textContent).toContain('My-Button');
  });
});
