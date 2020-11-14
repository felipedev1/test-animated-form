import { QuestionCard } from './components/QuestionCard'
import { useState } from 'react'
import { Button, LinearProgress } from '@material-ui/core'

import './styles/global.css'
import './styles/pages/app.css'

const questions = [
  "Qual seu nome?",
  "Quantos clientes novos você recebe em 1 mês?",
  "Quanto o seu cliente compra em média, num período de 1 mês?",
  "Geralmente quantos meses o seu cliente compra em 1 ano? (ex.: 1x, 2x, 3x... 12x)",
  "Quantos clientes ativos você tem atualmente?",
  "Quantos clientes você perdeu nesse período?"
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [question, setQuestion] = useState(questions[currentQuestion])
  const [progress, setProgress] = useState(0)

  function next(value) {

    setTimeout(() => {
      setCurrentQuestion(prev => prev + 1)
      setQuestion(questions[currentQuestion + 1])
      setProgress(Math.floor((((currentQuestion + 1) / questions.length) * 100)))
    }, 1000)
    
  }
  return (
    <div className="App">
      <div className="progress-container">
        <p>Progresso:</p>
        <LinearProgress style={{width: 250}} variant="determinate" value={progress} />
      </div>

      {progress < 100 ? (
        <QuestionCard next={next} question={question} current={currentQuestion} />
      ) : (
        <>
          <p>Concluido</p>
          <Button variant="contained" color="secondary">Ir para o dashboard</Button>
        </>
      )}
    </div>
  );
}

export default App;
