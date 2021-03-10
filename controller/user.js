const User_details=require('../models/users')
let ejs = require('ejs')
let path=require('path')

const form= async(req, res) => {
    return res.sendFile(path.join(__dirname, '../' + '/views/a.html'))
}


const add_detail= async(req,res)=>{
//    console.log(req.body)
   var obj = new User_details(req.body);
   obj.save()
   .then((data)=>{
       console.log(data)
    //    res.send("User inseted Successfully!")
       return res.sendFile(path.join(__dirname, '../' + '/views/success.html'))
    })
   .catch((err)=>{
       console.log(err.message)
       return res.sendFile(path.join(__dirname, '../' + '/views/error.html'))
   })
}

const all_data= async(req,res)=>{
   console.log("api is working...")
   User_details.find({})
   .then((all_data)=>{
       if(all_data.length){
           console.log(all_data)
           return res.render('b.ejs', {data: all_data})        //    res.send(all_data)
       }else{
           res.send("no found data.........")
       }
   })
   .catch((err)=>{
       console.log(err)
   })
}


const single_data= async(req,res)=>{
    const id=req.query._id
User_details.findById(id)
   .then((datas)=>{
       if(datas){
           console.log("datas", datas)
        //    res.send(datas)
           return res.render('single.ejs', {data: datas})        //    res.send(all_data)
       }else{
           res.send("no found data of this id.........")
       }
   })
   .catch((err)=>{
       console.log(err)
   })
}

const update=(req,res)=>{
    const users=req.body
    const id=req.query.id
    User_details.findByIdAndUpdate({_id: id}, 
        {$set:{
            client_name: users.client_name, 
            phone: users.phone,
            email: users.email,
            address: users.address
        }
    })
    .then((result)=>{
        console.log(result)
        res.send({status: "update data successfully! ", "result": result})
    })
    .catch((err)=>{
        console.log(err)
    })
}


const deleted=(req,res)=>{
    const id=req.query.id
    User_details.findByIdAndDelete(id)
    .then((result)=>{
        console.log("result")
        res.status(200).send({message:"successful"});
    })
    .catch((err)=>{
        console.log(err)
    })
}
   

module.exports={
   add_detail,
   all_data,
   single_data,
   update,
   deleted,
   form
}