import react from 'react'
import './userbody.css'
//import data from './data.json';

function logout(){
    localStorage.clear();
    window.location.href = '/';
}
class Userbody extends react.Component
{   
    constructor(props)
    {
        super(props);
      
    }

     
    
    
    render()
    {  
        
        let x = this.props.theName;
        let y = JSON.parse(x);
        return(
        <div>
             
            
             <h2 className="theGreeting">{'Hello'+' ' + y.name}</h2>
            <button onClick={()=>logout()} className="logoutBtn">Logout</button>
          
            
            

            <br/><br/><br/><br/>
            <a> <h1 className="gg">Preferred courses</h1></a>
           
            <hr/>
            <div className="preferredCourses">
              
                <img src="assets/images/python.jpg"/><br/><br/><br/><br/><br/>
               <a href="/cc"> <button>Start learning the course</button></a>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           
           <h1>See all the courses</h1>
           <hr/>
           <div className="allCourses">
           <img src="assets/images/python.jpg"/>
               <a href="/cc"> <button>Start learning the course</button></a>

            <img src="assets/images/python.jpg"/>
               <a href="/cc"> <button>Start learning the course</button></a>
           
            <img src="assets/images/python.jpg"/>
               <a href="/cc"> <button>Start learning the course</button></a>
            
            <img src="assets/images/python.jpg"/>
               <a href="/cc"> <button>Start learning the course</button></a>

           </div>
           
        </div>
        
    )
        }
}

export default Userbody;