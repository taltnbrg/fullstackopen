const Content = (props) => {
 return (
  <p>
    {props.name} {props.amount}
  </p>
 )
}

const Sum = (props) => {
  console.log(props)
  var count = 0
  props.sum.forEach((a)=>{ count+= a})
  return (
    <p>
      Number of exercises {count}
    </p>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.title}
    </h1>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content name={part1} amount={exercises1} />
      <Content name={part2} amount={exercises2} />
      <Content name={part3} amount={exercises3} />
      <Sum sum={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

export default App