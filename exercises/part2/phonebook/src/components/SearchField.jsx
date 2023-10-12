const SearchField = ({handleChange, text}) => {
  return (
    <div>
      {text}: <input type="text" onChange={handleChange} />
    </div>
  )
}

export default SearchField