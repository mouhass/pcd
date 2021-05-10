import react, { Children, useState } from 'react'
import './profsPage.css'
import Axios from 'axios'
function ProfPage()
{  const [maListe , setMaListe] = useState([])
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

   const MesCours=()=>{
    { Axios.get('http://localhost:3001/cours').then((response)=>{
       
        setMaListe(response.data)
        fff()
    })
   }}
  
   const fff=()=>{
       let ch=''
    maListe.map((val,key)=>{
               ch = ch +' '+ val.nomCours 
   })
      document.getElementById('hhh').innerHTML = ch
     }





        

   const QuiConsulte=()=>{
       document.getElementById("hhh").innerHTML= "je consulte"
   }

   const CreerNouveauCours=()=>
   {
    document.getElementById("hhh").innerHTML= "Avec 9arini vous pouvez créer votre propre cours"
   }
 
   const ModifierCours=()=>{
    document.getElementById("hhh").innerHTML= "Avec 9arini vous pouvez modifer <br/><br/>vos cours"
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
                <h1 id="hhh"></h1>
            </div>

           
            <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>

        </div>
    )

    }
export default ProfPage;