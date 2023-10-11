import {NavLink} from "react-router-dom"
import style from "./landing.module.css"

function Landing() {

    return (
        <div classname= {style.container}>
        <img src={"https://th.bing.com/th/id/R.c4628e3870f0bcfb3cf20debed4e13de?rik=GlDsWGI4S3%2bc9g&riu=http%3a%2f%2fwww.webquestcreator2.com%2fmajwq%2ffiles%2ffiles_user%2f22773%2fturismo-y-viajes.jpg&ehk=zAey9PdPIIlFvGkwymEXQPEMVrNoFomtBXSvLtlhOqw%3d&risl=&pid=ImgRaw&r=0"} alt='' />
        <NavLink to = "/home">
        <button>Home</button>
        </NavLink>
        </div>
    )
  };
  
  export default Landing;