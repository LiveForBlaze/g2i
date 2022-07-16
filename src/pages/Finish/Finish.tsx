import { useEffect, useState } from "react";
import { Button } from "../../components/UI";
import { ListItem } from "./components/ListItem";

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
        {correctAnswersQuantity} / {data.length}
        <ul>
          {data.map((item, index) => <ListItem {...item} index={index} answers={answers} />)}
        </ul>
      </div>
      <Button onClick={onRestart}>Play again?</Button>
    </div>
  )
}