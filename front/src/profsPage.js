import react, { Children, useState,useEffect } from 'react'
import './components/css/profsPage.css'
import Axios from 'axios'
function ProfPage()
{  const [maListe , setMaListe] = useState([])
   const [idprof,setIdprof] = useState('');


   const Afficher=(props,my)=>{
        return <div>
               {props === 1 ? MesCours():
                props === 2 ? QuiConsulte() : 
                props === 3 ? CreerNouveauCours() :
                props == 4 ? ModifierCours() : 
                <h1></h1>
               }
                
                
       </div>
      
   }
   //--------------------------------------------------MesCours shows the courses that were created by the prof 
   //--------------------------------------------------so we have to link the two tables 
/*
   useEffect(()=>{
    Axios.get('http://localhost:3003/profsID').then((response)=>{setIdprof(response.data)})
  },[0]);

*/
  
   const MesCours=(id)=>{
    //  Axios.get(`http://localhost:3003/read/${id}`).then((response)=>{setMaListe(response.data)})
    //    AfficherADroite()
    }

   
   const AfficherADroite=()=>{
       let ch=''
    maListe.map((val,key)=>{
               ch = ch +' '+ val.nomCours 
   })
      document.getElementById('Droite').innerHTML = ch
     }





        

   const QuiConsulte=()=>{
       document.getElementById("Droite").innerHTML= "je consulte"
   }

   const CreerNouveauCours=()=>
   {
    document.getElementById("Droite").innerHTML= "Avec 9arini vous pouvez créer votre propre cours"
   }
 
   const ModifierCours=()=>{
    document.getElementById("Droite").innerHTML= "Avec 9arini vous pouvez modifer <br/><br/>vos cours"
   }
    return(
        <div>
            <div className="logo">
                <img src="assets/images/logos/lg.jpg"/> 
                <h1>9arini</h1>
            </div>
           
            
            <div className="background">
                <img src="assets/images/profsBackground.jpg"/>
            </div>

            <div className="mesTaches">
                
                <a onClick={()=>Afficher(1)}><h3>Mes cours</h3></a><br/>
                <a onClick={()=>Afficher(2)}><h3>Qui a consilté mes cours</h3></a><br/>
                <a onClick={()=>Afficher(3)}><h3>Créer un nouveau cours</h3></a><br/>
                <a onClick={()=>Afficher(4)}><h3>modifier un cours</h3></a><br/>
            </div>

            <div className="Affichage" >
                <h1 id="Droite"></h1>
            </div>

        
        </div>
    )

    }
export default ProfPage;