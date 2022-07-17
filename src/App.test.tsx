import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';
import { MOCKED_QUESTION } from './mocks/question';

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');

test('renders Home page in App', () => {

  useStateSpy
    .mockImplementationOnce(() => [[MOCKED_QUESTION], setState])
    .mockImplementation(() => [0, setState]);

  render(<App />)

  const startButton = screen.getByTestId('home-begin-button')
  expect(startButton).toBeInTheDocument();
  fireEvent.click(startButton);
  expect(setState).toBeCalledWith(1);
});


test('renders Step page in App', () => {

  useStateSpy
    .mockImplementationOnce(() => [[MOCKED_QUESTION], setState])
    .mockImplementation(() => [1, setState])
    .mockImplementation(() => [[], setState]);

  render(<App />)

  const trueButton = screen.getByTestId('step-true-button')
  expect(trueButton).toBeInTheDocument();
  fireEvent.click(trueButton);
  expect(setState).toBeCalledWith(true);
});


test('renders Finish page in App', () => {

  useStateSpy
    .mockImplementationOnce(() => [[MOCKED_QUESTION], setState])
    .mockImplementationOnce(() => [2, setState])
    .mockImplementation(() => [[true], setState]);

  render(<App />)

  const retryButton = screen.getByTestId('finish-retry-button')
  expect(retryButton).toBeInTheDocument();
  fireEvent.click(retryButton);
  expect(setState).toBeCalledWith(0);
});
