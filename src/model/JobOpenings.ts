import mongoose, { Schema, model, Document, Model } from 'mongoose';

// Define the interface for the Job Opening document
export interface IJobOpening extends Document {
  role: string;
  description: string;
  salary: number;
  position: string;
  location: string;
  whatWeOffer: string;
  whatWeLookFor: string;
  eligibility: string;
  slug: string;
}

// Define the schema with type safety
const jobOpeningSchema: Schema<IJobOpening> = new Schema({
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  whatWeOffer: {
    type: String,
    required: true,
  },
  whatWeLookFor: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  }
});


// Create the model with type safety
const JobOpening: Model<IJobOpening> =(mongoose.models.JobOpening || model<IJobOpening>('JobOpening', jobOpeningSchema));

export default JobOpening;
