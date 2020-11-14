import { useEffect, useState } from "react"
import { motion, useAnimation } from 'framer-motion'
import '../styles/components/question-card.css'
import { Input, Button } from '@material-ui/core'

export const QuestionCard = ({next, question, current}) => {
  const controls = useAnimation()

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue("")
    controls.start({
      x: 0,
      opacity: 1,
      transition: {duration: 0.5}
    })
  }, [controls, question])
  
  function transition(e) {
    e.preventDefault()
    next(value)
    controls.start({
      x: "-100%",
      opacity: 0,
      transitionEnd: { x: "100%"},
      transition: {duration: 0.3, }
    })
  }
  return (
    <motion.form
     className="form-question"
     animate={controls}
      onSubmit={(e) => transition(e)}>
      <label htmlFor={`question${current}`}>{question}</label>
      <Input 
        placeholder="Digite sua resposta"
        id={`question${current}`} 
        name={`question${current}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && <Button variant="contained" color="primary" type="submit">Próximo</Button>}
    </motion.form> 
  )
}
