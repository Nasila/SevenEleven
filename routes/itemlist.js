const router = require('express').Router();
let Users=require('C:/Users/hp/Desktop/7-11 Project/7-11/src/model/usermodel.js')

router.route("/").get((req,res)=>{
    Users.find().then(issue=>res.json(issue)).catch(err=>res.status(400).json('Error: ' + err));});
router.route('/add-user').post((req, res) => {
        const id=req.body.id;
        const name=req.body.name;
        const items=req.body.items;
        const User=new Users({id,name,items});
        User.save()
        .then(() => res.json('Issue added!'))
        .catch(err => res.status(400).json('Error: ' + err))
    });
module.exports = router;