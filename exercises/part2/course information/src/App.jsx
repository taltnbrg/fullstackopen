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
  const exercisesCount = props.course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
  return (
    <p>
      <strong>total of {exercisesCount} exercises</strong>
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

const Course = ({courses}) => {
  if( courses.length > 0 ) {
    return (
        <div>
        {courses.map( course =>
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        )}
        </div>
    )
  }

  return (
    <div>
      <p>
        No courses
      </p>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App