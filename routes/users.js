const router = require('express').Router();
const bcrypt=require('bcryptjs');
const sessions=require('client-sessions');
let User = require('../models/user.model');
//var usernameinput="";
//var passwordinput="";
//var exist_count=0;
/*router.route('/').get((req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
    /*exist_count=User.find({"username": usernameinput},{'_id':0}).count()

if exist_count>=1:
    print("Field value is present")
else:
    print("Field value is not present")*/
//});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  var hash=bcrypt.hashSync(req.body.password,14);
  const password = hash;

  const newUser = new User({
    username,
    password,
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/login').post((req,res)=>{

    User.findOne({ username:req.body.username},(err,user)=>{
        if( err || !user || !bcrypt.compareSync(req.body.password, user.password)){
            console.log('wrong username / password');
            return res.send(false)
        }
        else{
            console.log("true");
            return res.send(true)
        }
    })

});
/*router.route('/login').post((req, res) => {
   usernameinput = req.body.username;
   passwordinput = req.body.password;

   User.find($and: [{"username": usernameinput, "password": passwordinput}], )
        if (exist_count>=1){
     () => res.json("true")
   }
   else{
     () => res.json("false")
   }
 )
     .catch(err => res.status(400).json('Error: ' + err));

   /*else{
     .then(() => res.json("false"))
     .catch(err => res.status(400).json('Error: ' + err));
   }*/


  /*const newUser = new User({
    username,
    password,
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));*/
//});

module.exports = router;
