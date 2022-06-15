import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // first Contact test
  it('renders', () => {
    render(<ContactForm />);
  });

  // second Contact test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('text in contact form', () => {
  it('inserts text into contact form header', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('contact')).toHaveTextContent('Contact me');
  });

  it('inserts button into form', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('submit-button')).toHaveTextContent('Submit');
  });
})