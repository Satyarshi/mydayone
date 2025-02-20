import mongoose from 'mongoose';

const connectMongo = async (): Promise<void> => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect('mongodb+srv://Qmint:cbw5vkGikN7DUYNx@cluster0.idytieh.mongodb.net/mydayonenext');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongo;
