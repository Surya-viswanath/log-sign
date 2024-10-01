const bcrypt = require('bcrypt');
const Loginsche = require("../Models/Loginschema");

const Login = async (req, res) => {
    const { Email, Password } = req.body;
    try {
      const dbemail = await Loginsche.findOne({ Email });
      if (dbemail) {
        if (dbemail.Email === Email && (await bcrypt.compare(Password, dbemail.Password))) {
          console.log('Login success');
          res.json({ user: dbemail }); 
        } else {
          console.log('Login failed');
          res.status(401).json({ error: 'Invalid email or password' }); 
        }
      } else {
        console.log('No data in db');
        res.status(404).json({ error: 'User not found' }); 
      }
    } catch (error) {
      console.log('Login error:', error);
      res.status(500).json({ error: 'Internal server error' }); 
    }
  };
 



module.exports = Login;