const PersonInputForm = ({handleFormSubmit, handleNewName, handlenewNumber, name, number}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input type="text" onChange={handleNewName} value={name} />
      </div>
      <div>
        number: <input type="text" onChange={handlenewNumber} value={number}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonInputForm