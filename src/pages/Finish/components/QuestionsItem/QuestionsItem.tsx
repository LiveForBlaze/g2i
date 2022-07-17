import { Box } from '../../../../components/UI';
import { QurdtionsList } from "../../../../services/getQuestionList/models/getQuestionsList";
import styles from './QuestionsItem.module.css';

interface QuestionsItemProps extends QurdtionsList {
  answers: boolean[];
  index: number;
}

export const QuestionsItem:React.FC<QuestionsItemProps> = ({ answers, question, index }) => {
  return(
    <li className={styles.listItem}>
      <div className={`${styles.answer} ${answers[index] ? styles.green : ''}`} data-testid='question-item-answer'>
        {answers[index] ? '+' : '-'}
      </div>
      <div className={styles.question} dangerouslySetInnerHTML={{ __html: question }} data-testid='question-item-question' />
    </li>
  )
}