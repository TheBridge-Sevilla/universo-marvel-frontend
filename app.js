import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => console.log(`App is live on port ${port}!`))