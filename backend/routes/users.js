const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
const User = require("../Modele/Users.model");


router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // validate
      if (!email || !password)
        return res.status(400).json({ msg: "Not all fields have been entered." });
  
      const user = await User.findOne({ email: email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "No account with this email has been registered." });
  
      console.log(user.password);
      const isMatch = await bcrypt.compare(password, user.password);
      if (password!=user.password) return res.status(400).json({ msg: "Invalid credentials." });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      
      res.json({
        token,
        user,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.get("/insertUser", async (req,res)=>{
        const users = new UsersModel({nom : "helloWorld" , descrimination:1 , password : "nvdfnfd" });
    try{
        await users.save();
        res.send("inserted data");
    }
    catch(err){
        console.log(err);
    }

});

router.get("/readUsers", async (req,res)=>{
    
    UsersModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })

})

router.delete("/delete", auth, async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.user);
      res.json(deletedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
router.post("/tokenIsValid", async (req, res) => {
    try {
      const token = req.header("x-auth-token");
      if (!token) return res.json(false);
  
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if (!verified) return res.json(false);
  
      const user = await User.findById(verified.id);
      if (!user) return res.json(false);
  
      return res.json(true);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
      nom: user.nom,
      id: user._id,
    });
  });
  
  module.exports = router;