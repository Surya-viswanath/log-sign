const bcrypt=require('bcrypt');
const Loginsche = require('../Models/Loginschema');


const signup = async(req,res)=>{
    const {Name,Email,Password,Phone}=req.body;
    const existinguser = await Loginsche.findOne({Email});
if(existinguser){
    return res.status(400).json({error:'email alredy exist'})
}
if (password.length < 6) {
    return res.status(400).json({error:'Password must contain a minimum of 6 characters'});
    
}

    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(Password,salt)
    
    const userdetails = await fooduser.create({
       Name,Email,Phone,Password :hashedpassword

})
res.json(userdetails)
}


const getuser = async (req, res) => {
    const { Email } = req.params;
    const signupdetails = await Loginsche.findOne({ Email });
    res.json(signupdetails);
}
const getall= async (req, res) => {
    const userList = await Loginsche.find()
    res.json(userList)
}

// Backend route to handle user deletion
const deleteUser= async (req, res) => {
    try {
        await Loginsche.findByIdAndDelete(req.params.userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Server error' });
    }
};



module.exports={signup,getuser,deleteUser,getall}