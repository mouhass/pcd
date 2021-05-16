import React from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import { history } from './helpers/history';
import Seconnecter from './components/seConnecter';
import Home from './components/home.js';
import PresentationCours from './components/presentationCours';
import Sinscrire from './components/sinscrire';
import './App.css';
import Seeall from './components/seeall';
import ContenuCours from './contenuCours';
import UsersPage from './interfaces/usersPage';
import ProfPage from './interfaces/profsPage'
import AdminPage from './interfaces/adminPage';
import Test from './test';
class App extends React.Component {
   
   render() {
       return (   
         <Router>
            <div className="App">                      
               <Switch>
                  {/* change Route with PrivateRoute after */}
                  <Route exact path="/" component={Home} />
                  <Route path="/seConnecter" component={Seconnecter} exact />
                  <Route  path="/sinscrire" component={Sinscrire} exact />
                  <Route path="/presentationCours" component={PresentationCours} exact />

                  <Route path="/seeall" component={Seeall} exact />
                  <Route path="/cc" component={ContenuCours} exact/>
                  <Route path="/usersPage" component={UsersPage} exact/>
                  <Route path="/profsPage" component={ProfPage} exact/>
                  <Route path="/adminPage" component={AdminPage} exact/>
                  <Route path="/contenuCours" component={ContenuCours} exact />
                  <Route path="/test" component={Test} exact/>
 
               </Switch>
            
            </div>
         </Router>
      );
   }
}

export { App };
