import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the interface for the Case Study document
export interface ICategory extends Document {
  name: string;
  slug: string;
  image?: string;
}
export interface ICaseStudy extends Document {
  title: string;
  description: string;
  slug: string;
  category: ICategory[];
  featuredImage?: string;
  problem: string;
  solution: string;
  result: string;
  relatedCases: ICaseStudy[];
  isPopular: boolean;
  isLatest: boolean;
  createdAt: Date;
  updatedAt: Date;
}
  // Category Schema
  const CategorySchema = new Schema<ICategory>(
    {
      name: { type: String, required: true },
      slug: { type: String, unique: true },
      image: { type: String },  
    },
    {
      timestamps: true,
    }
  );

const CaseStudySchema: Schema<ICaseStudy> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, unique: true },
    category: { type: [mongoose.Schema.Types.ObjectId], ref: 'Category' }, // Changed to ObjectId and reference to Category
    featuredImage: { type: String },
    problem: { type: String , required: true },
    solution: { type: String , required: true },
    result: { type: String , required: true },
    relatedCases: { type: [mongoose.Schema.Types.ObjectId], ref: 'CaseStudy' }, 
    isPopular: { type: Boolean, default: false },
    isLatest: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to generate a unique slug
CaseStudySchema.pre<ICaseStudy>('save', async function (next) {
  try {
    const createUniqueSlug = async (title: string): Promise<string> => {
      if (!title) throw new Error('Title is required to generate a slug.');

      const baseSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

      let uniqueSlug = baseSlug;
      let counter = 1;

      while (await mongoose.models.CaseStudy.findOne({ slug: uniqueSlug })) {
        uniqueSlug = `${baseSlug}-${counter}`;
        counter += 1;
      }

      return uniqueSlug;
    };

    if (!this.slug) {
      this.slug = await createUniqueSlug(this.title);
    }
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Create the model

const Category: Model<ICategory> = (mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema))
const CaseStudy: Model<ICaseStudy> = (mongoose.models.CaseStudy ||  mongoose.model<ICaseStudy>('CaseStudy', CaseStudySchema));

export default CaseStudy;
