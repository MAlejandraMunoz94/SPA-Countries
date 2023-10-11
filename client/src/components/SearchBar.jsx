import styles from "./SearchBar.module.css"
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
    <div className = {styles.containerSearch}>
    <input value={searchName} placeholder="Ingrese el pais" onChange={handleChange}/>
    <button className={`${styles.btnSearch} btn btnPrimary`} onClick={()=> onSearch(searchName)}>Busqueda</button>
    <button className={`${styles.btnSearch} btn btnPrimary`} onClick={()=> reset()}>Reset</button>
    </div>
)
};
  
  export default SearchBar;