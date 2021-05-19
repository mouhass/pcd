import react,{useContext, useEffect} from 'react'
import './userbody.css'
import UserContext from "../context/userContext";
import CoursContext from "../context/coursContext";

import Axios from 'axios';
import CoursCard from './CoursCards';

function Userbody(props)
{   
    
       let variable = <div></div>;
        const { userData,setUserData } = useContext(UserContext);
        const { coursData,setCoursData } = useContext(CoursContext);

       
    //      {for(let i=0;i<coursData.cours.length;i++){
    //        for(let j=0;j<11;j++)
    //            {if(coursData._id === userData.user.user.Avancements.idCours)
    //             console.log(coursData[i].nomCours)

    //      }
    //     }
    // }s
        {console.log(coursData.cours)}
        {console.log("------------")}
        

        return(
        <div>
            {variable}
             {userData.user ? (
                
                <div><h1 class="theGreeting">Bienvenue {userData.user.user.nom}!</h1><br/></div>
               ): 
               <div></div>
            }
           
            <br/><br/><br/><br/>
            <div className="ajustement">
               <h1>Mes cours preferé</h1>
               <div className="myCourses">
                 {userData.user ? userData.user.user.Avancements.map(x=>     coursData.cours ? coursData.cours.map(y=>      y._id===x.idCours ?    <CoursCard data={y._id} />: <div></div>) : <div></div>) : <div></div>}
               </div>

            </div>
         
            
               
        </div>    
    )
        }


export default Userbody;