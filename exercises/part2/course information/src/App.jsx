const Part = (props) => {
  return (
    <p>
      {props.name} {props.amount}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map( part => <Part key={part.id} name={part.name} amount={part.exercises} />)}
    </div>
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

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'new part',
        exercises: 11,
        id: 4
      },
      {
        name: 'another part',
        exercises: 10,
        id: 5
      }
    ]
  }

  return <Course course={course} />
}

export default App