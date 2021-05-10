import { render } from '@testing-library/react';
import react from 'react';
import { Switch } from 'react-router';
import {connect} from 'react-redux';
import './watchCourse.css';

class WatchCourse extends react.Component
{ constructor()
    {
        super()
        
    }



    change = ()=>
    {
        document.getElementById("hhh1").style.visibility = 'hidden';
        document.getElementById("hhh2").style.visibility = 'hidden';
        document.getElementById("hhh3").style.visibility = 'hidden';

       
    }

     demoVisibility1=()=> {
         
        document.getElementById("hhh1").style.visibility = 'visible';
        document.getElementById("hhh1").innerHTML=this.props.exp1
    }
      demoVisibility2=()=> {
         
    
        document.getElementById("hhh2").style.visibility = 'visible';
        document.getElementById("hhh2").innerHTML=this.props.exp2
       
          }


          demoVisibility3=()=> {
         
    
            document.getElementById("hhh3").style.visibility = 'visible';
            document.getElementById("hhh3").innerHTML=this.props.exp3
            
            
              }
   
  render(){
    
    return(
        <div>
            <div className="theVideo">
            <video width="600" height="400"  src={this.props.source} type="video/mp4" controls>      
            </video>
            
            <h1 onClick={this.demoVisibility1} className="word">{this.props.word1}</h1>
            
            <a><h2 id="hhh1" className="explication" ></h2></a>
                <br/><br/>
            <h1 onClick={this.demoVisibility2} className="word">{this.props.word2}</h1>
           
            <a><h2 id="hhh2" className="explication" ></h2></a>
            <br/><br/>
            <h1 onClick={this.demoVisibility3} className="word">{this.props.word3}</h1>
            
            <a><h2 id="hhh3" className="explication"></h2></a>
                <br/><br/>
            <h1 onClick={this.change}>hide</h1>
            

            </div>
            
            <div className="theCourses">
            <button onClick={this.props.zero}>Python Tutorial for Beginners 1 Install and Setup for Mac and Windows</button><br/><br/>
            <button onClick={this.props.first}>Python Tutorial for Beginners 2 Strings - Working with Textual Data</button><br/><br/>
            <button onClick={this.props.second}>Python Tutorial for Beginners 3 Integers and Floats - Working with Numeric Data</button><br/><br/>
            <button onClick={this.props.third}>Python Tutorial for Beginners 4 Lists, Tuples, and Sets</button><br/><br/>
            <button onClick={this.props.fourth}>Python Tutorial for Beginners 5 Dictionaries - Working with Key-Value Pairs</button><br/><br/>

            </div>
            
            
           
           

        </div>
    )}
}

const mapStateToProps = (store)=>{
    return{
        source: store.source,
        word1: store.word1,
        word2: store.word2,
        word3: store.word3,
        exp1:store.exp1,
        exp2:store.exp2,
        exp3:store.exp3


    }
}





const mapDispatchtoProps=(dispatch)=>{
    return{
        zero: ()=>dispatch({type:'zero'}),
        first: ()=>dispatch({type:'first'}),
        second: ()=>dispatch({type:'second'}),
        third: ()=>dispatch({type:'third'}),
        fourth: ()=>dispatch({type:'fourth'})
    }
}




export default connect(mapStateToProps,mapDispatchtoProps)(WatchCourse);
 
