import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
function AdminPage()
{

    const [listUsers,setLitsUsers] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3003/readUsers').then((response)=>{setLitsUsers(response.data);})
      },[]);
      
      function createData(id, nom, email, desc) {
        return { id, nom, email, desc};
      }
      
      const rows = [];
      listUsers.map((u, i) => {
        if (u.descrimination == 2) rows.push(createData(i, u.nom, u.email, true))
        else if (u.descrimination == 1) rows.push(createData(i, u.nom, u.email, false))
      })

      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'nom', headerName: 'Nom', width: 300 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'desc', headerName: 'Is Prof', type: 'boolean', width: 120 }
      ];


    return(
        <div>
          <h2>Users</h2>
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      components={{
        Toolbar: GridToolbar,
      }}
      rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    </div>
    )
}

export default AdminPage;