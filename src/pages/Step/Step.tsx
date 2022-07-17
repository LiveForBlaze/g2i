import { Button, Box } from '../../components/UI';
import { QuestionsList } from '../../services/getQuestionList/models/getQuestionsList';

interface StepProps {
  question: QuestionsList;
  onAnswer: (answer: boolean) => void;
  totalQuestions: number;
  currentIndex: number;
}

export const Step: React.FC<StepProps> = ({ question, onAnswer, totalQuestions, currentIndex }) => (
  <div>
    <h2 data-testid="step-category">{question?.category}</h2>
    <Box inverted>
      <span data-testid="step-question" dangerouslySetInnerHTML={{ __html: question?.question }} />
    </Box>
    <div data-testid="step-current-index">{currentIndex} of {totalQuestions}</div>
    <div>
      <Button onClick={() => onAnswer(true)} data-testid="step-true-button">True</Button>
      <Button onClick={() => onAnswer(false)} inverted data-testid="step-false-button">False</Button>
    </div>
  </div>
);
