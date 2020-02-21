const csvtojsonV2 = require('csvtojson/v2');
var fs = require('fs')
const csv=require('csvtojson');
const Matches = require('./ipl.js');
const csvFilePath='/home/shubham/Downloads/src/data/matches.csv';
const csvFilePath2='/home/shubham/Downloads/src/data/deliveries.csv';

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const iplMatches = new Matches(jsonObj);
    //console.log(iplMatches)
//     var matchesall = iplMatches.searchIplData();
//     console.log((matchesall));
//     var allData = JSON.stringify(matchesall);
//     fs.writeFile('/home/shubham/Downloads/src/output/matchesPerYear.json', allData,function(err,file){
//         if(err) throw err;
//         console.log('saved');
//     })
//    var wonTeam = new Matches(jsonObj);
//     var wonAllmatches = iplMatches.wonPerMatch();
//     console.log(wonAllmatches);
//     var allData1 = JSON.stringify(wonAllmatches);
//     fs.writeFile('/home/shubham/Downloads/src/output/wonPerMatchPerteamYear.json', allData1,function(err,file){
//         if(err) throw err;
//         console.log('saved');
//     })
    var iplBolwers = iplMatches.takeId()
    //console.log(iplBolwers)
    csv()
    .fromFile(csvFilePath2)
    .then((jsonObj)=>{
        //console.log(jsonObj);
        const iplMatches1 = new Matches(jsonObj);
        var matchesall = iplMatches1.searchExtraRuns(iplBolwers)
        var allData2 = JSON.stringify(matchesall);
    fs.writeFile('/home/shubham/Downloads/src/output/extraRuns.json', allData2,function(err,file){
        if(err) throw err;
        console.log('saved');
    })
    })
})

