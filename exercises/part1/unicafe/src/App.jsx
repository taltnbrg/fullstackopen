import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const HeadLine = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistics = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <StatisticsLine text={props.statistics[0].text} calculation={props.statistics[0].calculation} />
        <StatisticsLine text={props.statistics[1].text} calculation={props.statistics[1].calculation} />
        <StatisticsLine text={props.statistics[2].text} calculation={props.statistics[2].calculation} />
        <StatisticsLine text={props.statistics[3].text} calculation={props.statistics[3].calculation} />
        <StatisticsLine text={props.statistics[4].text} calculation={props.statistics[4].calculation} />
        <StatisticsLine text={props.statistics[5].text} calculation={props.statistics[5].calculation} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({text,calculation}) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {calculation}
      </td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementBad = () => {
    return () => { setBad(bad + 1) }
  }

  const incrementNeutral = () => {
    return () => { setNeutral(neutral + 1) }
  }

  const incrementGood = () => {
    return () => { setGood(good + 1) }
  }

  const statisticlinesGood = {text:"good", calculation:good}
  const statisticlinesNeutral = {text:"neutral", calculation:neutral}
  const statisticlinesBad = {text:"bad", calculation:bad}
  const statisticlinesTotal = {text:"all", calculation:bad+neutral+good}
  const statisticlinesAverage = {text:"average", calculation:((bad+neutral+good)!=0 ? (-1*bad+neutral*0+good)/(bad+neutral+good) : '/')}
  const statisticlinesPositive = {text:"positive", calculation:(bad+neutral+good)!=0 ? (good/(bad+neutral+good)*100) + ' %' : '/'}
  const statisticsLines = [statisticlinesGood,statisticlinesNeutral,statisticlinesBad,statisticlinesTotal,statisticlinesAverage,statisticlinesPositive]
  let statsLine = <p>no feedback given</p>

  if( good+neutral+bad > 0) {
    statsLine = <Statistics statistics={statisticsLines}/>
  }

  return (
    <div>
      <HeadLine text="give feedback" />
      <Button handleClick={incrementGood()} text="good" />
      <Button handleClick={incrementNeutral()} text="neutral" />
      <Button handleClick={incrementBad()} text="bad" />
      <HeadLine text="statistics" />
      {statsLine}
    </div>
  )
}

export default App