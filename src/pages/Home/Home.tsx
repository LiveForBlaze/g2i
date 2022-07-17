import { Button } from '../../components/UI';
import styles from './Home.module.css';

interface HomeProps {
  onStart: () => void;
  isLoading: boolean;
}

export const Home: React.FC<HomeProps> = ({ onStart, isLoading }) => {
  return (
    <>
      <h2>Welcome to the code challenge!</h2>
      <div>You will be presented with 10 True or False questions.</div>
      <h4>Can you score 100%?</h4>
      <Button onClick={onStart} data-testid="home-begin-button">Begin</Button>
      {isLoading && <div className={styles.loading} data-testid="home-loading"><h2>Loading...</h2></div>}
    </>
  )
}