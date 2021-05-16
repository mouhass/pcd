const mongoose = require('mongoose');
const Schema = mongoose.Schema
const coursSchema = new mongoose.Schema(

{
    nomCours :  String,
    idProf : {type: Schema.Types.ObjectId, ref: 'users'},
    description :  String,
    duree : Number,

    lessons : [{
                sourceVideo :  String,
                niveau :  String,
                nomBouton :String,
                Mots : {
                            mot :  String,
                            definition :  String,
                            niveau :  String
                      }


                }]

})
const Cours = mongoose.model("Cours",coursSchema)
module.exports = Cours;