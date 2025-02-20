import mongoose, { Schema, Document } from "mongoose";

interface IMdjForm extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  companyEmail?: string;
  designation?: string;
}

const MdjFormSchema = new Schema<IMdjForm>(
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


const MdjForm = mongoose.models.MdjForm || mongoose.model<IMdjForm>("MdjForm", MdjFormSchema);

export default MdjForm;
