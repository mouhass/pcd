import react, { useEffect, useState } from 'react'
import Axios from 'axios';
import './OurCours.css';
function OurCourses(props)
{   const [listeCours,setListeCours] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3003/readCourses').then((response)=>{setListeCours(response.data)})
      },[])
      let leNomDuCours="";
      let lienDeLimage="";
      { listeCours.map(x=> x._id ===  props.data ?  leNomDuCours= x.nomCours : <div></div>)}
      { listeCours.map(x=> x._id ===  props.data ?  lienDeLimage=x.image : <div></div>)}

    return(
        <div>
             <div className="card"  >
                    <img src={lienDeLimage} width={"300px"} height={"140px"}/>
                   <h3  textAlign= {"center"}>{leNomDuCours} </h3>
                  
                </div>
        </div>
    )
}

export default OurCourses;