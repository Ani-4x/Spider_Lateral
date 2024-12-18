import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String
    },
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    }
    
});

mongoose.model('user' , userSchema);
export default userSchema;