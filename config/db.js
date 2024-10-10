const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://binudhaduk1234:1o5oXUFaXVPwMDzU@cluster0.i3cen.mongodb.net/Blog')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


//   // db.js
// // db.js (Create this file if it doesn't exist)
// const mongoose = require('mongoose');

// // Optional: Use dotenv for environment variables
// require('dotenv').config();

// const connectDB = async () => {
//   try {
//     // Use environment variables for sensitive information
//     const dbURI = process.env.MONGO_URI || 'mongodb+srv://binudhaduk1234:1o5oXUFaXVPwMDzU@cluster0.i3cen.mongodb.net/Blog?retryWrites=true&w=majority';

//     await mongoose.connect(dbURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // Additional options can be added here
//       serverSelectionTimeoutMS: 30000, // 30 seconds timeout
//     });

//     console.log('MongoDB connected successfully');
//   } catch (err) {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// // Connection event listeners (optional but helpful for debugging)
// mongoose.connection.on('connected', () => {
//   console.log('Mongoose connected to the database');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('Mongoose connection error:', err);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('Mongoose disconnected from the database');
// });

// // Handle graceful shutdown
// process.on('SIGINT', async () => {
//   await mongoose.connection.close();
//   console.log('Mongoose disconnected on app termination');
//   process.exit(0);
// });

// module.exports = connectDB;
