import dotenv from 'dotenv';

dotenv.config({path: '.env'});
const SDK = require('aws-sdk');

const ID = process.env.AWS_ID;
const SECRET = process.env.AWS_SECRET;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const s3 = new SDK.S3({
	accessKeyId: ID,
	secretAccessKey: SECRET,
});