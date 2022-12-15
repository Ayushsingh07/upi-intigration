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
    var instance = new Razorpay({ key_id: 'rzp_test_AxsURObWFogMy4', key_secret: 'iqJFm2wrxirNNd0YRbFd0LHC' })

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