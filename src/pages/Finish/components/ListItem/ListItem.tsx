import { QurdtionsList } from "../../../../services/getQuestionList/models/getQuestionsList"

interface ListItemProps extends QurdtionsList {
  answers: boolean[];
  index: number;
}

export const ListItem:React.FC<ListItemProps> = () => {
  return(
    <div>
      
    </div>
  )
}