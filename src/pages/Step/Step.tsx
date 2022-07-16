import { Button, Box } from '../../components/UI';

interface StepProps {
  question: any;
  onAnswer: (answer: boolean) => void;
  totalQuestions: number;
  currentIndex: number;
}

export const Step: React.FC<StepProps> = ({ question, onAnswer, totalQuestions, currentIndex }) => {
  console.log(question);

  return (
    <div>
      <h2>{question.category}</h2>
      <Box inverted>
        <span dangerouslySetInnerHTML={{ __html: question.question }} />
      </Box>
      <div>{currentIndex} of {totalQuestions}</div>
      <div>
        <Button onClick={() => onAnswer(true)}>True</Button>
        <Button onClick={() => onAnswer(false)} inverted>False</Button>
      </div>
    </div>
  )
}