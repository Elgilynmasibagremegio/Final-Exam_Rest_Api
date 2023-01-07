import mongoose from 'mongoose'  
    
  export const idSchema = new mongoose.Schema(  
      {  
          id: { type: String, required: true , unique: true },  
          fullname:  { type: String, required: true},  
          address: { type: String, required: true },  
          age: { type: Number, required: true},  
          sex: { type: String, required: true},  
          mobileNo: { type: String, required: true, unique: true},  
             
      },  
      { timestamp: true}  
  )  
    
  const id = mongoose.model('id', idSchema)  
  export default Id
