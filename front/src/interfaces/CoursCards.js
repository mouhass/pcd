import react,{useContext} from 'react'
import { useHistory } from 'react-router';
import './CoursCards.css';
import UserContext from "../context/userContext";
import CoursContext from "../context/coursContext";

function CoursCard(props){

     
     //const history  = useHistory();
     
     const { userData,setUserData } = useContext(UserContext);
     const { coursData,setCoursData } = useContext(CoursContext);

    return(
        <div>
                <div className="card">
                    <img src="assets/images/python.jpg"/>
                   <h3 className="cardTitle"> <a >{  coursData.cours._id ===  props.data ?  coursData.cours.nomCours : <div></div>}</a></h3>
                  
                </div>
        </div>
    )
}

export default CoursCard;