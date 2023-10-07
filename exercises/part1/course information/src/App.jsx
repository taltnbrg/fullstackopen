const Content = (props) => {
  console.log(props)
  console.log(props.names)
  console.log(props.names[0])
  return (
    <div>
      <Part name={props.names[0]} amount={props.amounts[0]} />
      <Part name={props.names[1]} amount={props.amounts[1]} />
      <Part name={props.names[2]} amount={props.amounts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.amount}
    </p>
  )
}

const Sum = (props) => {
  console.log(props)
  var count = 0
  props.amounts.forEach((a)=>{ count+= a})
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
      <Content names={[part1,part2,part3]} amounts={[exercises1,exercises2,exercises3]} />
      <Sum amounts={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

export default App