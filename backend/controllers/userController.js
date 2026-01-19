import User from "../models/userModel.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import Validator from "validator"


//login user
export const loginUser = async(req,res) => {
    try{



    }catch(err){

    }
}

function createToken(id){
    return JWT.sign({id}, process.env.JWT_SECRETE, )

}

// register user
export const registerUser = async(req,res) => {
    try{
        const{name, password, email} = req.body;

        //checking the user already exist or not
        const existUser = await User.findOne({email:email});
        if(existUser){
            return res.json({
                success:false,
                message:"User already exist"
            })
        }

        //validating email and sting password
        if(!Validator.isEmail(email)){
             return res.json({
                success:false,
                message:"Please enter valid email"
            })
        }
        if(password.length < 8){
             return res.json({
                success:false,
                message:"Please enter Strong password"
            })
        }

        //hashing user password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password,salt);
        

        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
        });

        return res.status(200).json({

        })




    }catch(err){

    }
}