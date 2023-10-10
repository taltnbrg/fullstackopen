const Content = (props) => {
  return (
    <div>
      <Part name={props.course.parts[0].name} amount={props.course.parts[0].name.exercises} />
      <Part name={props.course.parts[1].name} amount={props.course.parts[1].name.exercises} />
      <Part name={props.course.parts[2].name} amount={props.course.parts[2].name.exercises} />
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

const Total = (props) => {
  let count = 0
  props.course.parts.forEach((a)=>{ count+= a.exercises})
  return (
    <p>
      Number of exercises {count}
    </p>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App