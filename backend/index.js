const express  = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());//middleware recive info front the front in json format
app.use(cors());

//const jwt = require('jsonwebtoken');

mongoose.connect("mongodb+srv://Mounir:23409234@@cluster0.msjbz.mongodb.net/MOOC?retryWrites=true&w=majority",{useNewUrlParser : true , useUnifiedTopology: true })
app.listen(3003,()=>{
    console.log('server running')
})



const CoursModel = require("./Modele/Cours");


const UsersModel = require("./Modele/Users");
const Users = require('./Modele/Users');
const { populate } = require('./Modele/Cours');
//const Cours = require('./Modele/Cours');

app.post("/insert", async (req,res)=>{
    const nomCours = req.body.nomCours;
    const description = req.body.description;
    const duree = req.body.duree;
    /*
    const cours = new CoursModel({nomCours : "helloWorld",description : "testAcces",duree : 9999 ,
    
        lessons : [{sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
        mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"} }, {sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
            mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"}},

       {sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
                mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"}},

        {sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
                    mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"}},

        {sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
                        mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"}},

        {sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
                            mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"}},

        {sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
                                mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"}},

        {sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
                                    mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"}},

        {sourceVideo : "https:", niveau : "dbfb",nomBouton : "dsksdnfe", Mots : {
    
                 mot : "ozefe",definition : "zoenoz",niveau :"sdnooc"}}]
   
             
    });*/
    const cours = new CoursModel({nomCours : nomCours,description : description ,duree : duree });

    try{
        await cours.save();
        res.send("inserted data");
    }catch(err){
        console.log(err);
    }
})

app.get("/read", async (req,res)=>{
    CoursModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })

})

app.put("/update",async (req,res)=>{
    const nouveauNom = req.body.nouveauNom;
    const id = req.body.id;
    try{
      await  CoursModel.findById(id,(err,updatedCours)=>{
                updatedCours.nomCours = nouveauNom;
                updatedCours.save();
                res.send("updated");
        })
    }catch(err){
        console.log(err);
    }
})

app.delete("/delete/:id",async (req,res)=>{
     const id = req.params.id;

     try{
            await (await CoursModel.findByIdAndDelete(id)).exec();
            res.send("deleted");
     }catch(err){
         console.log(err)
     }
})



app.get("/profsCours/:nom/:password",async(req,res)=>{
    const nom = req.params.nom;
    const password =req.params.password;
  UsersModel.findOne({nom : nom , password:password}).populate('cours').exec(function(err,result){
        if(err){
            res.send({message : "pas de cours"});
        }
       // result.cours.map(x=> console.log(x.nomCours));
       res.send(result);
    })

})




//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//for users.js
app.get("/insertUser", async (req,res)=>{
    
    const users = new UsersModel({nom : "helloWorld" , descrimination:1 , password : "nvdfnfd" 
    
});
try{
    await users.save();
    res.send("inserted data");
}catch(err){
    console.log(err);
}

});


app.get("/readUsers", async (req,res)=>{
    
    UsersModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })

})







app.listen(3002,()=>{
    console.log('server is running on port 3003 .......');
})