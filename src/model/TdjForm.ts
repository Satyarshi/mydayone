import mongoose, { Schema, Document } from "mongoose";

interface ITdjForm extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  companyEmail?: string;
  designation?: string;
}

const TdjFormSchema = new Schema<ITdjForm>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String },
    companyEmail: { type: String },
    designation: { type: String },
  },
  { timestamps: true }
);


const TdjForm = mongoose.models.TdjForm || mongoose.model<ITdjForm>("TdjForm", TdjFormSchema);

export default TdjForm;
