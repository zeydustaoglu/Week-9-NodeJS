// 1. Write to .txt file
// Create a function that writes all numbers between given 2 values in a text(txt) file.
var fs = require("fs");


fs.writeFile('file.txt','', function(err){
    if(err){
        return console.log(err);
    }
    console.log('file.txt created!');
}) 

var fileName =  "./file.txt"

numbers = []
function writeText(a, b){
    for (let i = a; i <= b; i++) {                
       numbers.push(i)     
       fs.writeFileSync(fileName, numbers)       
    }
}
writeText(22,55)

// 2. Read from .txt file
// Create a function that gets the content of given text file and prints it on the console.
var fs = require("fs");

function printText(str){
    var content = fs.readFileSync(str);
    console.log(content.toString());
}
printText('file.txt')

// 3. Merge files
// Create a function that gets the content of given text files and creates a new file with all the content.
var fs = require("fs");


function mergeFiles(file1,file2){

    var content1 = fs.readFileSync(file1);
    var content2 = fs.readFileSync(file2);
    

    fs.writeFile('mergedFile.txt','', function(err){
        if(err){
            return console.log(err);
        }
        console.log('mergedFile.txt created!');
    }) 

    const mergedFileContent = content1.toString()+ '\n\n' + content2.toString()
    fs.writeFileSync('mergedFile.txt', mergedFileContent)     

}
mergeFiles('mytextFile.txt', 'file.txt')

// 4. Using external module
// Install and import moment.js(a js libary) via NPM and create a function
// that prints the day name of X(given number as an argument) days later on the console by using moment.js
const moment = require('moment');


function getFutureDay(arg){
    let date = moment()      
        .add(arg, 'days')
        .format('dddd');
    console.log(arg+' days later, the day\'s name is '+ date)
}
getFutureDay(15)


