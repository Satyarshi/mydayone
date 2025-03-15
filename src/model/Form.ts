import exp from "constants";
import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  companyName: { type: String, required: true },
  email: { type: String, required: true,
    validate:{
      validator: function(email: string){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(email)) return false;
        
        const blockedDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"]

        const emailDomain = email.split("@")[1];

        return !!emailDomain && !blockedDomains.includes(emailDomain.toLowerCase());
      },
      message: "Please enter a valid company email"
    }
   },
  phone: { type: String, required: true },
  employeeHeadCount: { type: String, required: true },
  services: { type: String, required: true },
  message: { type: String },
},{ timestamps: true });

const Form = mongoose.models.Form || mongoose.model("Form", FormSchema);

export default Form;