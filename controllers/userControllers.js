const User = require('../Models/userModel')
const array = [{name:"Fadoua" ,age : 33, email : "fadwa@gmail.com", password: "14879"},
{name:"Asma" ,age : 38 , email : "asma@gmail.com", password: "5489ll7"},
{name:"Marwa" ,age : 17 , email : "marwa@gmail.com", password: "96347"},
{name:"Sami" ,age : 20 , email : "sami@gmail.com", password: "555479"}]
             //@desc ADD A NEW USER TO THE DATABASE (Many users)
            //@path POST/api/user
            //@access PUBLIC
const addUser = (req,res)=>{
                User.create(array)
                .then((data)=> res.json(data))
                .catch((err)=> {
                    console.log(err);
                    res.status(500).json({msg:'something went wrong'});
            })
            };

        // @desc RETURN ALL USERS
        // @path GET/api/user
        // @access PUBLIC
const getUsers= (req,res)=>{
    User.find()
    .then((data)=> res.json(data))
    .catch((err)=> {
        console.log(err);
        res.status(500).json({msg:'something went wrong'});
})
};
         
        //@desc REMOVE A USER BY ID 
        //@path DELETE/api/user
        //@access PUBLIC

const deleteUser= (req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((data)=> res.json(data))
    .catch((err)=> {
        console.log(err);
        res.status(500).json({msg:'something went wrong'});
})
};
       //@desc  EDIT A USER BY ID 
        //@path PUT /api/user
       //@access PUBLIC
const updateUser= (req,res)=>{
            User.findOneAndUpdate(req.params.id, req.body, {new : true})
            .then((data)=> res.json(data))
            .catch((err)=> {
                console.log(err);
                res.status(500).json({msg:'something went wrong'});
        })
};


module.exports ={addUser,getUsers,deleteUser,updateUser}