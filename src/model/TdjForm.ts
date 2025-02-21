import mongoose, { Schema, Document } from "mongoose";

interface ITdjForm extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  companyName?: string;
  companyEmail?: string;
  designation?: string;
}

const TdjFormSchema = new Schema<ITdjForm>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true,
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
    designation: { type: String, required: true },
  },
  { timestamps: true }
);


const TdjForm = mongoose.models.TdjForm || mongoose.model<ITdjForm>("TdjForm", TdjFormSchema);

export default TdjForm;
