import { render, screen, fireEvent } from '@testing-library/react';
import { Step } from './Step';
import { MOCKED_QUESTION  } from '../../mocks/question';

const mockedAnswer = jest.fn();

test('renders Step page', () => {
  render(
    <Step 
      onAnswer={mockedAnswer} 
      totalQuestions={3} 
      currentIndex={1} 
      question={MOCKED_QUESTION}
    />
  )
  
  expect(screen.getByTestId('step-category')).toHaveTextContent('test category');
  expect(screen.getByTestId('step-question')).toHaveTextContent('Test question');
  expect(screen.getByTestId('step-current-index')).toHaveTextContent('1 of 3');

  const trueButton = screen.getByTestId('step-true-button');
  expect(trueButton).toBeInTheDocument();
  fireEvent.click(trueButton);
  expect(mockedAnswer).toBeCalledWith(true);

  const falseButton = screen.getByTestId('step-false-button');
  expect(falseButton).toBeInTheDocument();
  fireEvent.click(falseButton);
  expect(mockedAnswer).toBeCalledWith(false);

});
