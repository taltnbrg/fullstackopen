import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(anecdotes.map(()=>{return 0}))
  const [selected, setSelected] = useState(Math.round(Math.random()*6))
  const [topVote, setTopVote] = useState(null)

  const incrementVote = (index) => {
    const newVotes = [...votes]
    console.log(newVotes,index)
    newVotes[index] = 1 + newVotes[index]
    const newTopVote = newVotes.indexOf(Math.max(...newVotes))
    setTopVote(newTopVote)
    setVotes(newVotes)
  }

  const incrementVoteClickHandle = () => {
    return () => {incrementVote(selected)}
  }

  const randomizeSelected = (current) => {
    let newIndex = current
    while( newIndex === current ) {
      newIndex = Math.round(Math.random()*6)
    }
    setSelected(newIndex)
  }

  const randomizeSelectedClickHandle = () => {
    return () => {randomizeSelected(selected)}
  }

  let topAnecdote = <p>No votes yet.</p>
  if(topVote !== null) {
    topAnecdote = <p>{anecdotes[topVote]}</p>
  }

  return (
    <div>
      <h2>Random anecdote</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <h2>Top anecdote</h2>
      {topAnecdote}
      <button onClick={randomizeSelectedClickHandle()}>next anecdote</button>
      <button onClick={incrementVoteClickHandle()}>vote for anecdote</button>
    </div>
  )
}

export default App