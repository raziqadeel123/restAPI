import express from 'express';
import connectDB from './db/connectdb.js';
import web from './Routes/web.js';

const app = express();
const port = process.env.PORT || '8000';

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';

// Database Connection
connectDB(DATABASE_URL);

// API Json
app.use(express.json());

// Load router
app.use('/student', web);

app.listen(port, () => {
  console.log(`Sever Listening at http://localhost:${port}`);
});
