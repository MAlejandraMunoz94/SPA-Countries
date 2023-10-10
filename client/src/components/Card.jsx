import {Link} from "react-router-dom"


function Card({props}) {

let {id,name,flag,region} = props;

    return (
        <Link to = {"/detail/"+id}>
        <div>
         <img src={flag} alt={name} />
         <h2>{name}</h2>
         <h3>{region}</h3>
        </div>
        </Link>
    )
  };
  
  export default Card;