var fs = require("fs");
const Matches1 = require("./ipl.js");
const { Client } = require("pg");
const client = new Client({
  user: "shubham",
  host: "localhost",
  database: "ipldata3",
  password: "shubham@123",
  port: 5432
});
client.connect();
client.query("SELECT * FROM matches", (err, res) => {
  if (err) {
    throw err;
  } else {
    const iplMatches1 = new Matches1(res.rows);

    //  1. Number of matches played per year for all the years in IPL.
    var matchesall = iplMatches1.searchIplData();
    var allData = JSON.stringify(matchesall);
    fs.writeFile("../output/matchesPerYear.json", allData, function(err, file) {
      if (err) throw err;
      console.log("saved");
    });

    //  2. Number of matches won of per team per year in IPL.
    var wonAllmatches = iplMatches1.wonPerMatch();
    var allData1 = JSON.stringify(wonAllmatches);
    fs.writeFile("../output/wonPerMatchPerteamYear.json", allData1, function(
      err,
      file
    ) {
      if (err) throw err;
      console.log("saved");
    });

    //  3. Extra runs conceded per team in 2016
    const iplBolwers = iplMatches1.takeId();

    //  4. Top 10 economical bowlers in 2015
    var bowlerseco = iplMatches1.getMatchIdOfSpecificYear();

    // 7.Find the strike rate of the batsman Virat Kohli for each season
    var idPerSeasonPerYer = iplMatches1.takeid1();

    client.query("SELECT * FROM deliveries", (err, res1) => {
      if (err) {
        throw err;
      } else {
        const iplMatches2 = new Matches1(res1.rows);

        //  3. Extra runs conceded per team in 2016
        var matchesall1 = iplMatches2.searchExtraRuns(iplBolwers);
        var allData2 = JSON.stringify(matchesall1);
        fs.writeFile("../output/extraRuns.json", allData2, function(err, file) {
          if (err) throw err;
          console.log("saved");
        });

        //  4. Top 10 economical bowlers in 2015
        var bowlerseconomic = iplMatches2.top10economicalBowlers(bowlerseco);
        var allData3 = JSON.stringify(bowlerseconomic);
        fs.writeFile("../output/top10EconomyBowler.json", allData3, function(
          err,
          file
        ) {
          if (err) throw err;
          console.log("saved");
        });

        // 7.Find the strike rate of the batsman Virat Kohli for each season
        var strikeRate = iplMatches2.viratKohliPerSeasonStrikeRate(
          idPerSeasonPerYer
        );
        var allData7 = JSON.stringify(strikeRate);
        fs.writeFile("../output/viratKohliStrikeRate.json", allData7, function(
          err,
          file
        ) {
          if (err) throw err;
          console.log("saved");
        });

        // 8.Find the highest number of times one player has been dismissed by another player
        var dismissed = iplMatches2.playerdismissed();
        var allData8 = JSON.stringify(dismissed);
        fs.writeFile(
          "../output/playerDismissedbyBowler.json",
          allData8,
          function(err, file) {
            if (err) throw err;
            console.log("saved");
          }
        );

        //  9.Find the bowler with the best economy in super overs
        var superover = iplMatches2.bestEconomyBowler();
        var allData9 = JSON.stringify(superover);
        fs.writeFile("../output/bestEconomyBowler.json", allData9, function(
          err,
          file
        ) {
          if (err) throw err;
          console.log("saved");
        });
      }
    });

    //  5.Find the number of times each team won the toss and also won the match
    var wonToss = iplMatches1.wonTheTossAndWonTheMatch();
    var allData4 = JSON.stringify(wonToss);
    fs.writeFile("../output/wonTosswonMatch.json", allData4, function(
      err,
      file
    ) {
      if (err) throw err;
      console.log("saved");
    });

    // 6.Find player per season who has won the highest number of Player of the Match awards
    var playrData = iplMatches1.playerOfThematch();
    var allData6 = JSON.stringify(playrData);
    fs.writeFile("../output/playerOfTheMatch.json", allData6, function(
      err,
      file
    ) {
      if (err) throw err;
      console.log("saved");
    });
  }
});
