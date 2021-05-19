import react from 'react'
import { useHistory } from 'react-router';
import './CoursCards.css';
function CoursCard(props){

     const forwarfi=()=>{
         return  <div>{history.push( "/contenu du cours",{nomCours :props.theData.nomCours ,idProf : props.theData.idProf, description : props.theData.description , duree  : props.theData.durée,lessons : props.theData.lessons})}</div> 
     }
     const history  = useHistory();
    return(
        <div>
                <div className="card">
                    <img src="assets/images/python.jpg"/>
                   <h3 className="cardTitle"> <a onClick={()=>forwarfi()}>{props.theData.nomCours}</a></h3>
                   
                </div>
        </div>
    )
}

export default CoursCard;