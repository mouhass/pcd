import react ,{useContext, useState,useEffect}from 'react'
import './contenuCours.css'
import VoirCours from './VoirCours';
import UserContext from "./context/userContext";
import CoursContext from "./context/coursContext";
import ReactPlayer from "react-player"
import Axios from 'axios'
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

     const [listUsers,setLitsUsers] = useState([]);
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

    useEffect(()=>{
        Axios.get('http://localhost:3003/readUsers').then((response)=>{setLitsUsers(response.data)})
      },[]);

    

    {Array.from(coursData.cours).map(x=>x._id===y.idd ?  theID=x.idProf :  <div></div>)}
   
    //{console.log("e5dem ya weld el 9a7ba")}
    {listUsers.map(x=> x._id===theID ? nomProf=x.nom : <div></div>)}

     let mot1="";
     let mot2="";
     let mot3="";
     let def1="";
     let def2="";
     let def3="";
     let idLessonss="";
     {userData.user ? Array.from(userData.user.user.Avancements).map(q=>q.idCours===y.idd   ? idLessonss = q.idLesson : <div></div>   )  : <div></div>}
     let maListe = [];
    { coursData.cours ? Array.from(coursData.cours).map(q=> q._id===y.idd ? q.lessons.map(x=>x.id===idLessonss ?  x.Mots.map(z=>maListe.push(z.mot)) :<div></div>) : <div></div> ) : <div></div>}
    { coursData.cours ? Array.from(coursData.cours).map(q=> q._id===y.idd ? q.lessons.map(x=>x.id===idLessonss ?  x.Mots.map(z=>maListe.push(z.definition)) :<div></div>) : <div></div> ) : <div></div>}

    {mot1=maListe[0]; mot2=maListe[1];mot3=maListe[2] ;def1=maListe[3]; def2=maListe[4];def3=maListe[5] }



    return(
        <div >
                
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
                        <h1>{def1}  </h1>
                        <button onClick={()=>toggle1()}>close</button>
                    </div>
                    <div id="popup2" className="popup">
                        <h1>{def2}  </h1>
                        <button onClick={()=>toggle2()}>close</button>
                    </div>
                    <div id="popup3" className="popup">
                        <h1>{def3}  </h1>
                        <button onClick={()=>toggle3()}>close</button>
                    </div>
                    
                    <div className="Droite">
                        <h1 id="inlineFrameExample">
                            <h1 onClick={()=>toggle1()}>{mot1}</h1>
                            <h1 onClick={()=>toggle2()}>{mot2}</h1>
                            <h1 onClick={()=>toggle3()}>{mot3}</h1>
                       </h1>

                    </div>
                </div>

        </div>
    )
}

export default ContenuCours;