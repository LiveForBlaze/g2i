import { render, screen } from '@testing-library/react';
import { QuestionsItem } from './QuestionsItem';

import { MOCKED_QUESTION  } from '../../../../mocks/question';

test('renders QuestionItem', () => {
  render(<QuestionsItem index={0} answers={[true]} {...MOCKED_QUESTION} />);
  const answer = screen.getByTestId('question-item-answer');
  expect(answer).toHaveTextContent('+');
  expect(answer).toHaveClass('green');
  expect(screen.getByTestId('question-item-question')).toHaveTextContent('Test question');
});
