
var fs = require('fs')
const csv=require('csvtojson');
const Matches = require('./ipl.js');
const csvFilePath='../data/matches.csv';
const csvFilePath2='../data/deliveries.csv';

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const iplMatches = new Matches(jsonObj);
    

    var matchesall = iplMatches.searchIplData();
    var allData = JSON.stringify(matchesall);
    fs.writeFile('../output/matchesPerYear.json', allData,function(err,file){
        if(err) throw err;
        console.log('saved');
    })


    var wonTeam = new Matches(jsonObj);
    var wonAllmatches = iplMatches.wonPerMatch();
    var allData1 = JSON.stringify(wonAllmatches);
    fs.writeFile('../output/wonPerMatchPerteamYear.json', allData1,function(err,file){
        if(err) throw err;
        console.log('saved');
    })




    var iplBolwers = iplMatches.takeId()
    var bowlerseco = iplMatches.getMatchIdOfSpecificYear();
    csv()
    .fromFile(csvFilePath2)
    .then((jsonObj)=>{
        const iplMatches1 = new Matches(jsonObj);
    

        var matchesall = iplMatches1.searchExtraRuns(iplBolwers)
        var allData2 = JSON.stringify(matchesall);
        fs.writeFile('../output/extraRuns.json', allData2,function(err,file){
        if(err) throw err;
        console.log('saved');
    }) 


//      var bowlerseconomic = iplMatches1.top10economicalBowlers(bowlerseco);
//    })



    var wonToss = iplMatches.wonTheTossAndWonTheMatch()
    var allData4 = JSON.stringify(wonToss);
    fs.writeFile('../output/ wonTosswonMatch.json', allData4,function(err,file){
            if(err) throw err;
            console.log('saved');
    }) 


    var playrData = iplMatches.playerOfThematch()
    var allData6 = JSON.stringify(playrData);
    fs.writeFile('../output/ playerOfTheMatch.json', allData6,function(err,file){
            if(err) throw err;
            console.log('saved');
    }) 


// var allid = iplMatches.takeid1()
// var viratStrikeRate = iplMatches1.strikeRate(allid)

    })

})
