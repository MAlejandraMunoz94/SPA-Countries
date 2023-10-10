
function FilterBar() {

    return (
        <div>
         <select>
        <option value="C1">America</option>
        <option value="C2">Asia</option>
        <option value="C3">Africa</option>
        <option value="C4">Europa</option>
        <option value="C5">Otro</option>
      </select>

      <select>
        <option value="A1">Tipo 1</option>
        <option value="A2">Tipo 2</option>
        <option value="A3">Tipo 3</option>
      </select>

      <select>
        <option value="A1">Mas poblados</option>
        <option value="A2">Menos poblados</option>
      </select>

      <select>
        <option value="A1">A - Z</option>
        <option value="A2">Z - A</option>
      </select>
        </div>
    )
  };
  
  export default FilterBar;