import { useEffect, useState } from "react";
import { Button } from "../../components/UI";
import { QuestionsItem } from "./components/QuestionsItem";
import { QurdtionsList } from '../../services/getQuestionList/models/getQuestionsList';

interface FinishProps {
  onRestart: () => void;
  data: QurdtionsList[];
  answers: boolean[];
}

export const Finish: React.FC<FinishProps> = ({ onRestart, data, answers }) => {
  const [correctAnswersQuantity, setCorrectAnswersQuantity] = useState<number>(0);

  useEffect(() => {
    setCorrectAnswersQuantity(answers.reduce((sum, cur) => cur ? sum += 1 : sum, 0));
  }, [data, answers]);

  return (
    <div>
      <div>
        <h3>
          You scored <br />
          <span data-testid="finish-correct-answers">{correctAnswersQuantity} / {data.length}</span>
        </h3>
        <ul>
          {data.map((item, index) => <QuestionsItem {...item} index={index} answers={answers} key={index} />)}
        </ul>
      </div>
      <Button onClick={onRestart} data-testid="finish-retry-button">Play again?</Button>
    </div>
  )
}