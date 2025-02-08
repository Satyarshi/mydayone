  import mongoose, { Schema, Document, Model } from 'mongoose';

  // Define the Category interface
  export interface ICategory extends Document {
    name: string;
    slug: string;
    image?: string;
  }

  // Define the Blog interface
  export interface IBlog extends Document {
    title: string;
    description: string;
    slug: string;
    category: ICategory[]; // Array of ObjectId references to Category
    featuredImage?: string;
    readTime?: string;
    author: string;
    isPopular?: boolean;
    isLatest?: boolean;
    content: string;
    createdAt: Date;
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

  // Blog Schema
  const BlogSchema = new Schema<IBlog>(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      slug: { type: String, unique: true },
      category: { type: [mongoose.Schema.Types.ObjectId], ref: 'Category' },
      featuredImage: { type: String },
      readTime: { type: String },
      author: { type: String, default: 'My Day One' },
      content: { type: String, required: true },
      isPopular: { type: Boolean, default: false },
      isLatest: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  );

  // Update slug and updatedAt before saving
  BlogSchema.pre<IBlog>('save', async function (next) {
    try {
      const createUniqueSlug = async (title: string): Promise<string> => {
        if (!title) throw new Error('Title is required to generate a slug.');
        
        let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        let uniqueSlug = slug;
        let counter = 1;

        while (await mongoose.models.Blogs.findOne({ slug: uniqueSlug })) {
          uniqueSlug = `${slug}-${counter}`;
          counter += 1;
        }

        return uniqueSlug;
      };

      // Only generate slug if not set
      if (!this.slug) this.slug = await createUniqueSlug(this.title);
      next();
    } catch (error: any) {
      next(error);
    }
  });

  // Create and export models
  const Category: Model<ICategory> = (mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema))
  const Blog :Model<IBlog>= (mongoose.models.Blogs ||mongoose.model<IBlog>('Blogs', BlogSchema))

  export { Blog, Category };
