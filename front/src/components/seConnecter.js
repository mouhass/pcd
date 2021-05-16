import React,{useState,useEffect} from 'react';
//import { authenticationService } from '../services/authentication.service';
//import { Formik, Field, Form, ErrorMessage } from 'formik';
//import * as Yup from 'yup';
import './css/seConnecter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Link} from 'react-router-dom'
import UsersPage from '../interfaces/usersPage';
import Userbody from '../interfaces/userbody';

import Axios from 'axios';
function Seconnecter(props) 
 {
     const [nom , setNom ] = useState('');
     const [password,setPassword]=useState('');
     const [UsersList,setUsersList] = useState([]);
     const [theResponse,setTheResponse]=useState('');
     useEffect(()=>{
        Axios.get('http://localhost:3003/readUsers').then((response)=>{setUsersList(response.data)})
      },[])
     const conn =()=>{
          return <div>
              {UsersList.find(o => o.nom === nom&&o.password===password&&o.descrimination ===1) ?
          <div>{props.history.push( "/userspage",{nom : nom,password : password})}</div> : 
          UsersList.find(o => o.nom === nom&&o.password===password&&o.descrimination ===2) ?
          <div>{props.history.push( "/profsPage",{nom : nom,password : password})}</div> :  
          UsersList.find(o => o.nom === nom&&o.password===password&&o.descrimination ===3) ?
          <div>{props.history.push( "/adminPage",{nom : nom,password : password})}</div> : <div>{setTheResponse("try again")}</div>
           }
          </div>
      }
     
    return (
        <div>
            
                  <input type="text" placeholder="Users's name" onChange={(event)=>{setNom(event.target.value)}}/><br/><br/>
                  <input type="password" placeholder="password" onChange={(event)=>{setPassword(event.target.value)}}/> <br/><br/>
                  
               
               <button onClick={()=>conn()}>confirm</button>
               <h1>{theResponse}</h1>
                
             
                

            
            
                
            
           
        </div>
     ) }
export default Seconnecter;