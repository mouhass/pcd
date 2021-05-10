import React,{useState} from 'react';
//import { authenticationService } from '../services/authentication.service';
//import { Formik, Field, Form, ErrorMessage } from 'formik';
//import * as Yup from 'yup';
import './css/seConnecter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Link} from 'react-router-dom'
import UsersPage from '../usersPage';
import Userbody from '../userbody';
import Users from '../data/users.json';

function Seconnecter(props) 
 {
     
   
   function verify()
   { var i=0;
    for (i=0; i < Users.length; i++) {
        if (Users[i].userName.toUpperCase == document.getElementById("h").value.toUpperCase&& Users[i].password.toUpperCase == document.getElementById("j").value.toUpperCase&&Users[i].descri==0)
            return (
                <div>
                    {props.history.push( "/userspage", {name:document.getElementById("h").value,password:document.getElementById("j").value})}
                </div>

             )
        if (Users[i].userName.toUpperCase == document.getElementById("h").value.toUpperCase&& Users[i].password.toUpperCase == document.getElementById("j").value.toUpperCase&&Users[i].descri==1)
            return ( <div>
                {props.history.push( "/profsPage", {name:document.getElementById("h").value,password:document.getElementById("j").value})}
            </div> )
        if (Users[i].userName.toUpperCase == document.getElementById("h").value.toUpperCase&& Users[i].password.toUpperCase == document.getElementById("j").value.toUpperCase&&Users[i].descri==2)
            return ( <div>
                {props.history.push( "/adminPage", {name:document.getElementById("h").value,password:document.getElementById("j").value})}
            </div> )
    }
    return false;
   }
    
   

    return (
        <div>
            
                  <input type="text" placeholder="Users's name"  id="h" /><br/><br/>
                  <input type="password" placeholder="password"   id="j"/> <br/><br/>
            
               
               <button onClick={()=>verify() 
                    
                    
                    
                

               }>confirm</button>
             
                

            
            
                
            
           
        </div>
    
        )}
export default Seconnecter;