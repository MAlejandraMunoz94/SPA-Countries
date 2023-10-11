import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { cleanState } from '../redux/actions';

function SearchBar({onSearch}) {

const dispatch = useDispatch();
const [searchName,setSearchName] = useState("");

function handleChange (event){
let valor = event.target.value;
setSearchName(valor);
};

function reset (){
  dispatch(cleanState())
}

return (
    <div>
    <input value={searchName} onChange={handleChange}/>
    <button onClick={()=> onSearch(searchName)}>Busqueda</button>
    <button onClick={()=> reset()}>Reset</button>
    </div>
)
};
  
  export default SearchBar;