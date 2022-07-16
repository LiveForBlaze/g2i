import { QurdtionsList } from "../../../../services/getQuestionList/models/getQuestionsList";
import styles from './ListItem.module.css';

interface ListItemProps extends QurdtionsList {
  answers: boolean[];
  index: number;
}

export const ListItem:React.FC<ListItemProps> = ({ answers, question, index }) => {
  return(
    <li className={styles.listItem}>
      <div>{answers[index] ? '+' : '-'}</div>
      <div dangerouslySetInnerHTML={{ __html: question }} />
    </li>
  )
}