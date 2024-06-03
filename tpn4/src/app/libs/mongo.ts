import mongoose from 'mongoose';

const {MONGODB_URI} = process.env;

if(!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

export async function connect() {
  try {
    if (!MONGODB_URI) {
      throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }
    await mongoose.connect(MONGODB_URI, {});
    const {connection} = mongoose;
    if(connection.readyState === 1){
      console.log('Database connected');
      return Promise.resolve(true);
    }
  } catch(error) {
    console.error('Error connecting to database', error);
    return Promise.reject(false);
  }
}