const Filter = ({ filter, setFilter }) => {
  return (
    <form>
      <label>
        Find contact by name<br></br>
        <input onChange={setFilter} value={filter} type="text" name="filter" />
      </label>
    </form>
  )
}
 
export default Filter;