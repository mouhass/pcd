import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import UserContext from "../context/userContext";
import ErrorNotice from "./ErrorNotice";
import './css/sinscrire.css'
import Axios from 'axios'

function Sinscrire () {    

    const [email, setEmail] = useState();
    const [nom, setNom] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    var radios = document.getElementsByName('etat');
    var valDescri=0;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {            
            switch(radios[i].value)
            {
                case "etudiant" : valDescri=1;
                case "prof" : valDescri=2;               
            }
                break;
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        try{
            const newUser = {email, password, passwordCheck, nom};
            await axios.post("http://localhost:3003/users/register", newUser);
            const loginResponse = await axios.post("http://localhost:3003/users/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };

    const ajouterUtiliateur =()=>{
        //Axios.post('http://localhost:3003/create',{Nomutilisateur: "document.ged().value",
        // mdp: "document.getElementById().value",etat : valDescri}).then(()=>{
        //     console.log("success!!!")
        // })
    }

    const AfficherUtilisateurs = ()=>{
        Axios.get('http://localhost:3003/utilisateurs').then((response)=>{
             console.log(response)
         })

    }



   const handleClick=()=>{
    this.setState(({type}) => ({
    type: type === 'text' ? 'password' : 'text'
    }))}


    return(
        <div>
            <h1>S'inscrire</h1><br/>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <h5>Profitez de votre temps libre pour apprendre auprès des meilleurs profs</h5>
            <br/>

            <form onSubmit={submit}>
                <label>Nom de l'utilisateur</label>
                <input type="text" placeholder="nom" id="un" onChange={e => setNom(e.target.value)}/>
                <label>Email: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)}/>
                <label>Password: </label>
                <input type="password" id="pw" onChange={e => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm password" onChange={e => setPasswordCheck(e.target.value)}/>
                <input type="radio" value="etudiant" id="radioEtudiant" name="etat"/><label> Etudiant</label><br/>
                <input type="radio" value="prof" id="radioProfesseur" name="etat"/><label> Professeur</label>

                <input type="submit" value="Register" className="btn btn-primary" />
            </form>

           <hr/>
        </div>
    )
   
}


export default Sinscrire;