const User=require('../Models/userModel')

const aboutpage= async(req,res)=>{
    try {
        const userId=req.session.user
        const user=await User.findById(userId)
        res.render('about',{user})
        
    } catch (error) {
        console.log('Error Happence in th about Ctrl in;; the funtion aboutpage',error);
    }
}



module.exports={
    aboutpage
}