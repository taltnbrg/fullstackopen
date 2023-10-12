const PersonInputForm = ({handleFormSubmit, handleNewName, handlenewNumber}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input type="text" onChange={handleNewName} />
      </div>
      <div>
        number: <input type="text" onChange={handlenewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonInputForm