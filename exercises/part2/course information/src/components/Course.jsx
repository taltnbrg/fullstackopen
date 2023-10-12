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

export default Course