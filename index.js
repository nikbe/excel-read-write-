const xlsx = require('xlsx');

//read file
const readingFile = xlsx.readFile("test.xlsx")
//taking tab of file (Sheet1)
const cc= readingFile.Sheets['Sheet1'];
//converting into json 
const jsonData = xlsx.utils.sheet_to_json(cc);

console.log("jsonData",jsonData);