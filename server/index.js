
var fs = require('fs')
const csv=require('csvtojson')
const Matches = require('./ipl.js')
const csvFilePath='../data/matches.csv'
const csvFilePath2='../data/deliveries.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const iplMatches = new Matches(jsonObj)
    
//  1. Number of matches played per year for all the years in IPL.
    var matchesall = iplMatches.searchIplData();
    var allData = JSON.stringify(matchesall);
    fs.writeFile('../output/matchesPerYear.json', allData,function(err,file){
        if(err) throw err;
        console.log('saved');
    })

//  2. Number of matches won of per team per year in IPL.
    var wonAllmatches = iplMatches.wonPerMatch();
    var allData1 = JSON.stringify(wonAllmatches);
    fs.writeFile('../output/wonPerMatchPerteamYear.json', allData1,function(err,file){
        if(err) throw err;
        console.log('saved');
    })



    
//  3. Extra runs conceded per team in 2016
    var iplBolwers = iplMatches.takeId();
    csv()
    .fromFile(csvFilePath2)
    .then((jsonObj)=>{
        const iplMatches1 = new Matches(jsonObj);
    

        var matchesall = iplMatches1.searchExtraRuns(iplBolwers);
        var allData2 = JSON.stringify(matchesall);
        fs.writeFile('../output/extraRuns.json', allData2,function(err,file){
        if(err) throw err;
        console.log('saved');
    }) 

//  4. Top 10 economical bowlers in 2015
    var bowlerseco = iplMatches.getMatchIdOfSpecificYear();
    var bowlerseconomic = iplMatches1.top10economicalBowlers(bowlerseco);
    var allData3 = JSON.stringify(bowlerseconomic);
        fs.writeFile('../output/top10EconomyBowler.json', allData3,function(err,file){
        if(err) throw err;
        console.log('saved');
    }) 



//  5.Find the number of times each team won the toss and also won the match
    var wonToss = iplMatches.wonTheTossAndWonTheMatch();
    var allData4 = JSON.stringify(wonToss);
    fs.writeFile('../output/wonTosswonMatch.json', allData4,function(err,file){
            if(err) throw err;
            console.log('saved');
    }) 

//  6.Find player per season who has won the highest number of Player of the Match awards
    var playrData = iplMatches.playerOfThematch();
    var allData6 = JSON.stringify(playrData);
    fs.writeFile('../output/playerOfTheMatch.json', allData6,function(err,file){
            if(err) throw err;
            console.log('saved');
    }) 

// 7.Find the strike rate of the batsman Virat Kohli for each season
    var idPerSeasonPerYer = iplMatches.takeid1();
    var strikeRate = iplMatches1.viratKohliPerSeasonStrikeRate(idPerSeasonPerYer);
    var allData7 = JSON.stringify(strikeRate);
    fs.writeFile('../output/viratKohliStrikeRate.json', allData7,function(err,file){
        if(err) throw err;
        console.log('saved');
    }) 
    

// 8.Find the highest number of times one player has been dismissed by another player   
    var dismissed = iplMatches1.playerdismissed();
    var allData8 = JSON.stringify(dismissed);
    fs.writeFile('../output/playerDismissedbyBowler.json', allData8,function(err,file){
        if(err) throw err;
        console.log('saved');
    }) 

//  9.Find the bowler with the best economy in super overs
    var superover = iplMatches1.bestEconomyBowler()
    var allData9 = JSON.stringify(superover);
    fs.writeFile('../output/bestEconomyBowler.json', allData9,function(err,file){
        if(err) throw err;
        console.log('saved');
    }) 

})

})
