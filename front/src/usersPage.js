import react from 'react'
import Usernavbar from './usernavbar'
import Userbody from './userbody'
function UsersPage(props)
{   
    
   
    return(
        
        <div>
            
            <Usernavbar/>
            <br/><br/><br/> <br/><br/><br/>
            <br/><br/><br/> <br/><br/><br/> <br/><br/><br/>            
            <Userbody theName={JSON.stringify(props.history.location.state)} />
            
        </div>
    )
}
export default UsersPage;