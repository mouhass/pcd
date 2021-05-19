import react, { Children, useState,useEffect,useContext } from 'react'
import './profsPage.css'
import Axios from 'axios'
import Formulaire from './creationCours';
import UserContext from "../context/userContext";
import CoursContext from "../context/coursContext";



function ProfPage(props)
{    const { userData,setUserData } = useContext(UserContext);
    const { coursData,setCoursData } = useContext(CoursContext);
    const myArray = [];
    {for(let i=0;i<coursData.cours.length;i++)
    
    if(coursData.cours[i].nomCours&&coursData.cours[i].idProf === userData.user.id)    {myArray.push(<h1>{coursData.cours[i].nomCours}</h1>)};
    }
    

     const [maListe , setMaListe] = useState([])
   const [idprof,setIdprof] = useState('');
     
//    const x =JSON.stringify(props.history.location.state);
//    const  y = JSON.parse(x);

   const Afficher=(props,my)=>{
        return <div>
               {props === 1 ? MesCours():
               
                props === 2 ? CreerNouveauCours() :
                props == 3 ? ModifierCours() : 
                <h1></h1>
               }
                
                
       </div>
      
   }
   //--------------------------------------------------MesCours shows the courses that were created by the prof 
   //--------------------------------------------------so we have to link the two tables 

   const MesCours=()=>{
//    Axios.get(`http://localhost:3003/profsCours/${y.nom}/${y.password}`).then((response)=>{setMaListe(response.data.cours)
//   },[]);
//    AfficherADroite();
 }


  
   

   
   const AfficherADroite=()=>{
       let ch=''
    maListe.map((val,key)=>{
               ch = ch +' </br></br>'+ val.nomCours 
   })
      document.getElementById('Droite').innerHTML = ch
     }





        

   

   const CreerNouveauCours=()=>
   {
    document.getElementById("Droite").innerHTML="<form>"+
    
    "<label>Nom du cours</label><br/>"+
    "<input type=\"test\"  name=\"nomCours\"    /><br/>"+
    "<label>Description</label><br/>"+ 
    "<input type=\"text\" name=\"description\"/><br/>"+ 
    "<label>Duree</label><br/>"+
    "<input type=\"number\" name=\"duree\"/><br/>"+
    "<div>"+
    "<label>URL du video</label><br/>"+
    "<input type=\"text\" name=\"sourceVideo\" /><br/>"+
    "<label>Niveau</label><br/>"+
    "<input type=\"text\"/><br/>"+
    "</div>";



    
    
    
    
   }
 
   const ModifierCours=()=>{
    document.getElementById("Droite").innerHTML= "modifie un cours"
   }
    return(
        <div>
           {myArray}
            <div className="logo">
                <img src="assets/images/logos/lg.jpg"/> 
                <h1>9arini</h1>
            </div>
           
            
            <div className="background">
                <img src="assets/images/profsBackground.jpg"/>
            </div>

            <div className="mesTaches">
                
                <a onClick={()=>Afficher(1)}><h3>Mes cours</h3></a><br/>
                
                <a onClick={()=>Afficher(2)}><h3>Créer un nouveau cours</h3></a><br/>
                <a onClick={()=>Afficher(3)}><h3>modifier un cours</h3></a><br/>
            </div>

            <div className="Affichage" >
                <h1 id="Droite"></h1>
            </div>

            
        </div>
    )

    }

export default ProfPage;