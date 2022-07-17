import { useEffect, useState } from 'react';
import { Box } from './components/UI';
import { Home } from './pages/Home';
import { Step } from './pages/Step';
import { Finish } from './pages/Finish';

import { getQuestionList } from './services/getQuestionList';
import { QurdtionsList } from './services/getQuestionList/models/getQuestionsList';

import './App.css';

export const App = () => {
  const [data, setData] = useState<QurdtionsList[]>([]);
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isQuizStarted = step !== 0;
  const isQuizFinished = step === data?.length + 1;

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    setIsLoading(true);
    getQuestionList(() => setIsLoading(false)).then((resp) => setData(resp));
  }

  const handleStepChange = (answer: boolean) => {
    const isAnswerCorrect = data[step - 1]?.correct_answer.toLowerCase() === answer.toString();

    setAnswers([...answers, isAnswerCorrect]);
    setStep(step + 1);
  }

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
    getData();
  }

  const renderContent = () => {
    if(isQuizFinished) {
      return (
        <Finish 
          onRestart={handleRestart}
          data={data}
          answers={answers}
        />
      )
    } else if(isQuizStarted) {
      return (
        <Step 
          question={data[step - 1]} 
          onAnswer={handleStepChange}
          totalQuestions={data.length}
          currentIndex={step}
        />
      )
    }
    return <Home onStart={() => setStep(1)} isLoading={isLoading} />
  }

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-company">G2i code challenge:</div>
        <Box width={480} className="App-content">
          {renderContent()}
        </Box>
        <div className="App-author">by Mukhamedov Rustam</div>
      </div>
    </div>
  );
}

