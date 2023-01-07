import mongoose from 'mongoose'  
  import { idSchema } from './id.js'  
    
  const LibrarySchema = new mongoose.Schema(  
      {  
         Name: { type: String , required: true },  
           Author:  { type: String, required: true},  
            ID {  
              type: mongoose.Schema.Types.ObjectId,  
              ref: 'id',  
              required: true  
          },  
           id:Id  
      },     
      { timestamp: true}  
  )  
    
  const Library = mongoose.model('Library', LibrarySchema)  
  export default Library 
  
  
  
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
