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

    const toggle1=()=>{
        var pop = document.getElementById("popup1");
        pop.classList.toggle('active');
    }

    const toggle2=()=>{
        var pop = document.getElementById("popup2");
        pop.classList.toggle('active');
    }
    const toggle3=()=>{
        var pop = document.getElementById("popup3");
        pop.classList.toggle('active');
    }
    let nomDuCours="";
    {Array.from(coursData.cours).map(x=> x._id===y.idd ?  nomDuCours=x.nomCours : <div></div>    )}
    let theID = "";
    let nomProf = "bbhfy";
    {Array.from(coursData.cours).map(x=>x._id==y.idd ?  theID=x.idProf :  <div></div>)}
    {userData.user ? Array.from(userData.user.user).map(w=> w._id==theID ? nomProf = "w.nom" :<div></div>) : <div>{console.log("fuck ")}</div>}

    return(
        <div >
                 {/* <h1>hello world {userData.user.user.nomCours}  , {y.idProf}</h1>
                <h1>{y.description} ,  {y.duree}</h1>
                {y.lessons.map(w=>console.log(w.sourceVideo))} */}
               
                <div className="navbarr">
                    <h3>{nomDuCours}</h3>
                    <p>Réalisé par l'enseignant {nomProf} </p>
                    <img  src="assets/images/python.jpg"/>
                </div>


                <div className="leBody">
                    <div className="vid">
                    
                    <iframe width="50%" height="315" src="https://www.youtube.com/embed/JGASDKLZcdw?modestbranding=1&controls=0;rel=1&playlist=VIDEO_ID&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                    <div id="popup1" className="popup">
                        <h1>hello1  </h1>
                        <button onClick={()=>toggle1()}>close</button>
                    </div>
                    <div id="popup2" className="popup">
                        <h1>hello2  </h1>
                        <button onClick={()=>toggle2()}>close</button>
                    </div>
                    <div id="popup3" className="popup">
                        <h1>hello3  </h1>
                        <button onClick={()=>toggle3()}>close</button>
                    </div>
                    
                    <div className="Droite">
                        <h1 id="inlineFrameExample">
                            <h1 onClick={()=>toggle1()}>nzeonfoef</h1>
                            <h1 onClick={()=>toggle2()}>noezfezf</h1>
                            <h1 onClick={()=>toggle3()}>fzefzefefez</h1>
                       </h1>

                    </div>
                </div>

        </div>
    )
}

export default ContenuCours;