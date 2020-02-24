
var fs = require('fs')
const csv=require('csvtojson');
const Matches = require('./ipl.js');
const csvFilePath='../data/matches.csv';
const csvFilePath2='../data/deliveries.csv';

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const iplMatches = new Matches(jsonObj);
    
//  1. Number of matches played per year for all the years in IPL.
    var matchesall = iplMatches.searchIplData();
    var allData = JSON.stringify(matchesall);
    fs.writeFile('../output/matchesPerYear.json', allData,function(err,file){
        if(err) throw err;
        console.log('saved');
    })

//  2. Number of matches won of per team per year in IPL.
    var wonTeam = new Matches(jsonObj);
    var wonAllmatches = iplMatches.wonPerMatch();
    var allData1 = JSON.stringify(wonAllmatches);
    fs.writeFile('../output/wonPerMatchPerteamYear.json', allData1,function(err,file){
        if(err) throw err;
        console.log('saved');
    })



//  3. Extra runs conceded per team in 2016
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


//  5.Find the number of times each team won the toss and also won the match
    var wonToss = iplMatches.wonTheTossAndWonTheMatch()
    var allData4 = JSON.stringify(wonToss);
    fs.writeFile('../output/ wonTosswonMatch.json', allData4,function(err,file){
            if(err) throw err;
            console.log('saved');
    }) 

//  6.Find player per season who has won the highest number of Player of the Match awards
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
