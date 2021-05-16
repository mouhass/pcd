import React from 'react';
import react from 'react'
import './css/sinscrire.css'
import Axios from 'axios'
class Sinscrire extends React.Component
{ 
    state={
        type : 'password',
        userName : '',
        password:''
        
    
       }

 
    


   render(){
    const ajouterUtiliateur =()=>{
        Axios.post('http://localhost:3001/create',{Nomutilisateur: "document.ged().value",
         mdp: "document.getElementById().value",etat : valDescri}).then(()=>{
             console.log("success!!!")
         })
    }

    const AfficherUtilisateurs = ()=>{
        Axios.get('http://localhost:3001/utilisateurs').then((response)=>{
             console.log(response)
         })

    }



   const handleClick=()=>{
    this.setState(({type}) => ({
    type: type === 'text' ? 'password' : 'text'
    }))}

        var radios = document.getElementsByName('etat');
        var valDescri=0;
        for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            
           switch(radios[i].value)
           {
               case "etudiant" : valDescri=0;
               case "prof" : valDescri=1;
               
           }

          
            break;
        }
        }

    


    return(
        <div>
            <h1>S'inscrire</h1><br/>
            <h5>Profitez de votre temps libre pour apprendre auprès des meilleurs profs</h5>
            <br/>
            <h5>Nom de l'utilisateur</h5><br/>
            <input type="text" placeholder="Saisissez votre nom d'utilisateur" id="un"/><br/><br/>
            <h5>Mot de passe</h5>

            <input type={this.state.type} placeholder="Créez votre mot de passe" id="pw"/>
            <span className="password__show" onClick={()=>handleClick()}>{this.state.type === 'text' ? 'Hide' : 'Show'}</span>
            <br/><br/>
            <input type="radio" value="etudiant" id="radioEtudiant" name="etat"/><label> Etudiant</label><br/>
            <input type="radio" value="prof" id="radioProfesseur" name="etat"/><label> Professeur</label>
            
            
            <br/><br/>
            
            <button className="theBtn" onClick={()=>ajouterUtiliateur()}>inscrivez vous gratuitement !</button>
           <hr/>
           <button onClick={()=>AfficherUtilisateurs()}>Afficher les utilisateurs</button>
        </div>
    )
   }
}


export default Sinscrire;