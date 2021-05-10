import React from 'react';

import './contenuCours.css';

import WatchCourse from './watchCourse';
import {Provider} from 'react-redux';
import store from './store/store';


function ContenuCours(props)
{   
   
   
    return(
        
        <div>
           <div className="bar">
               <h1 className="bartext">
                  {/*y.name*/}
               </h1>
                    <div className="barimg">
                        {/*<img src={y.imageSource}/>*/}
                    </div>
           </div>
        <div>
       

         <div>
                


            <Provider store={store}>
            <WatchCourse/>
            </Provider>

         </div>



        </div>
          

        </div>
    )
   }



export default ContenuCours;