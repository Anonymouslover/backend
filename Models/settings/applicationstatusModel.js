const mongoose=require("mongoose")

const statusSchema=mongoose.Schema({
    
    status:{type:String,default:"In-Progress"},
    jobapply:{type:mongoose.Schema.Types.ObjectId,ref:'jobapply'},
},
{timestamps:true}
)

const statusModel=mongoose.model("applicationstatus",statusSchema)

module.exports=statusModel