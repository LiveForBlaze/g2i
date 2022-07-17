import { render, screen, fireEvent } from '@testing-library/react';
import { Finish } from './Finish';

import { MOCKED_QUESTION  } from '../../mocks/question';

const mockedRestart = jest.fn();

test('renders Finish page', () => {
  render(
    <Finish 
      onRestart={mockedRestart} 
      answers={[true, false]} 
      data={[MOCKED_QUESTION, MOCKED_QUESTION]} 
    />
  )
  
  expect(screen.getAllByTestId('question-item-answer').length).toBe(2);
  expect(screen.getByTestId('finish-correct-answers')).toHaveTextContent('1 / 2');

  const retryButton = screen.getByTestId('finish-retry-button');
  expect(retryButton).toBeInTheDocument();
  fireEvent.click(retryButton);
  expect(mockedRestart).toBeCalled();

});
