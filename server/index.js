const csv=require('csvtojson');
const csvFilePath='/home/shubham/Downloads/src/data/deliveries.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    
})
 