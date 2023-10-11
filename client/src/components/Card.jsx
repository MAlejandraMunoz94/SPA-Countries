import styles from "./Card.module.css"
import {Link} from "react-router-dom"


function Card({props}) {

let {id,name,flag,continents} = props;

    return (
        <Link className={styles.link} to= {"/detail/"+id}>
        <div className= {styles.card}>
        <div className= {styles.det} >
         <h2>{name}</h2>
         <h3>{continents}</h3>
         </div>
         <div className={styles.image}>
         <img src={flag} alt={name} />
         </div>
        </div>
        </Link>
    )
  };
  
  export default Card;