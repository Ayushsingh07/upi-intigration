const express = require('express')
const app=express()
const port =5000
const Razorpay=require("razorpay")

app.use(express.json())
app.get("/",(res,req)=>{
    res.send("hellow world")
})

app.post("/payment",async(req,res)=>{
    
    let {amount}=req.body
    var instance = new Razorpay({ key_id: 'rzp_test_KVEXPxDVJKyTGw', key_secret: 'YksuE2APttE2JzEzF6LY7yG4' })

    let order =await instance.orders.create({
        amount: amount*100,
        currency: "INR",
        receipt: "receipt#1",
        
      })
      res.status(201).json({
        success:true,
        order,
        amount,
      })

})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})