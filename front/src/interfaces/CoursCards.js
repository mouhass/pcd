import react,{useContext} from 'react'
import { useHistory } from 'react-router';
import './CoursCards.css';
import UserContext from "../context/userContext";
import CoursContext from "../context/coursContext";

function CoursCard(props){
    const history = useHistory();
    
    const redirigi=(id)=>{
    history.push("/contenuCours",{idd : id});
    }
     
     const { userData,setUserData } = useContext(UserContext);
     const { coursData,setCoursData } = useContext(CoursContext);
     let nomDuCours="";
     let lienImage="";
     { coursData.cours.map(x=> x._id ===  props.data ? nomDuCours= x.nomCours : <div></div>)}
     { coursData.cours.map(x=> x._id ===  props.data ? lienImage= x.image : <div></div>)}


    return(
        <div>
                <div className="card">
                    <img src={lienImage}/>
                   <h3 className="cardTitle"> <a onClick={()=>redirigi(props.data)}>{nomDuCours}</a></h3>
                  
                </div>
        </div>
    )
}

export default CoursCard;