import react, { useEffect, useState } from 'react'
import Axios from 'axios';
import './OurCours.css';
function OurCourses(props)
{   const [listeCours,setListeCours] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3003/readCourses').then((response)=>{setListeCours(response.data)})
      },[])

    return(
        <div>
             <div className="card" >
                    <img src="assets/images/python.jpg"/>
                   <h3  > { listeCours.map(x=> x._id ===  props.data ?  x.nomCours : <div></div>)}</h3>
                  
                </div>
        </div>
    )
}

export default OurCourses;