// // Imports entire module including default export
// import * as dotenv from 'dotenv';
// dotenv.config();
import { config } from 'dotenv';
config();

console.log(process.env.S3_BUCKET);
console.log(process.env.SECRET_KEY);
