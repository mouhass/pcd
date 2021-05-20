import react ,{useContext}from 'react'
import './contenuCours.css'
import VoirCours from './VoirCours';
import UserContext from "./context/userContext";
import CoursContext from "./context/coursContext";
import ReactPlayer from "react-player"
function ContenuCours(props)
{
     const x= JSON.stringify(props.history.location.state);
     const y = JSON.parse(x);
    
     const leVideo=(d)=>{
        document.getElementById("inlineFrameExample").innerHTML = <iframe id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="300" src="https://youtu.be/HWxBtxPBCAc?list=PLrSOXFDHBtfHg8fWBd7sKPxEmahwyVBkC">
                     </iframe>
                    
   
    }


    const { userData,setUserData } = useContext(UserContext);
    const { coursData,setCoursData } = useContext(CoursContext);


    let nomDuCours="";
    {Array.from(coursData.cours).map(x=> x._id===y.idd ?  nomDuCours=x.nomCours : <div></div>    )}
    return(
        <div>
                 {/* <h1>hello world {userData.user.user.nomCours}  , {y.idProf}</h1>
                <h1>{y.description} ,  {y.duree}</h1>
                {y.lessons.map(w=>console.log(w.sourceVideo))} */}
                
                <div className="navbar">
                    <h3>{nomDuCours}</h3>
                    <p>Réalisé par l'enseignant ...</p>
                    <img  src="assets/images/python.jpg"/>
                </div>


                <div className="leBody">
                    <div className="Gauche">
                    <ReactPlayer 
                    url="https://www.youtube.com/watch?v=XuFDcZABiDQ">
                    </ReactPlayer>

                        
                    
                    </div>
                    
                    <div className="Droite">
                        <h1 id="inlineFrameExample">
                    
                       </h1>

                    </div>
                </div>

        </div>
    )
}

export default ContenuCours;