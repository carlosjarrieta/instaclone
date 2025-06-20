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

async function awsUploadImage(file, filePath) {
	const params = {
		Bucket: BUCKET_NAME,
		Key: filePath,
		Body: file
	}

	try {
		const data = await s3.upload(params).promise();
		return data.Location;
	} catch (error) {
		console.log('Error uploading image to S3:', error);
		throw new Error('Failed to upload image');
	}
}

export default awsUploadImage;