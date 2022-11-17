import fs from 'fs'
import S3 from 'aws-sdk/clients/s3'
/* const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY; */
const nameBucket = "s3-photosdf"
/* const region="us-east-1"
const accessKeyId="AKIAWKBU23SMZXQZ27VX"
const secretAccessKey="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" */
const region = process.env.AWS_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
//console.log(accessKeyId)
const storage = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

export const uploadToBucket = (file) => {
    //console.log(file)
    const stream = fs.createReadStream(file.tempFilePath);
    const params = {
        Bucket:nameBucket,
        Key:file.name,
        Body:stream
    };
    return storage.upload(params).promise();
}

export const deleteObject = (params) => {
    storage.deleteObject(params, function(err, data){
        if(err){
            console.log(err, err.stack);  // error
        }else{
            console.log('Eliminado correctamente');
        } 
    })
}