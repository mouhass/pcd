/*const express = require('express')
const mysql = require('mysql')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password : '123',    //404
    database : 'pcddata'
})

app.post('/create', ( req , res )=>{
    const idUtilisateur = req.body.idUtilisateur;
    const Nomutilisateur = req.body.Nomutilisateur;
    const mdp = req.body.mdp;
    const etat = req.body.etat;

    db.query('INSERT INTO UTILISATEURS (nomutilisateur,mdp,descriminate) VALUES (?,?,?)'
    ,[Nomutilisateur,mdp,etat]
    ,(err,res) =>{
        if(err){
            console.log(err)     }
        else{
            res.send("values inserted")
    }    
    
})
    
}  )


app.get('/utilisateurs', ( req , res )=>{
    

    db.query('SELECT * FROM UTILISATEURS ',(err,result) =>{
        if(err){
            console.log(err)     }
        else{
            res.send(result)
    }    
    
})
    
}  )

app.get('/cours', ( req , res )=>{
    
    const idprof = req.body.idprof;
    db.query('SELECT * FROM pcddata.cours where idProf=?  ',[idporf],(err,result) =>{
        if(err){
            console.log(err)     }
        else{
            res.send(result)
    }    
    
})
    
}  )



app.listen(3001,()=>{
    console.log("Yey , your server is running on port 3001");
})*/
const WebHDFS = require("webhdfs");

var request = require("request");  
let url = "http://localhost:50070/dfshealth.html#tab-overview";

let port = 50070; //change here if you are using different port

let dir_path = "/user/hive/warehouse/pcddata.db"; 

let path = "/webhdfs/v1/" + dir_path + "?op=LISTSTATUS&user.name=hdfs";

let full_url = url+':'+port+path;

request(full_url, function(error, response, body) {

        if (!error && response.statusCode == 200) {
    
            console.log(".. response body..", body);
    
            let jsonStr = JSON.parse(body);
    
            let myObj = jsonStr.FileStatuses.FileStatus;
    
            let objLength = Object.entries(myObj).length;
    
                     console.log("..Number of files in the folder: ", objLength);
    
        } else {
    
             console.log("..error occured!..");
    
        }
    
    }  )



    let hdfs = WebHDFS.createClient({

            user: "hdfs",
        
            host: "3002",
        
            port: 50070, //change here if you are using different port
        
            path: "webhdfs/v1/"
        
        });