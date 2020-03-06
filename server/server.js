var http = require("http");
var fs = require("fs");
var server = http
  .createServer(function(req, res) {
    if (req.url == "/") {
      fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) {
          console.error("file  does not exist");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    }
    // 1. Number of matches played per year for all the years in IPL.
    else if (req.url == "/perMatchPerYear1") {
      fs.readFile(
        "../Htmlfiles/perMatchPerYear1.html",
        "utf-8",
        (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });

            res.write(data);
            res.end();
          }
        }
      );
    } 
    //2. Number of matches won of per team per year in IPL.
    else if (req.url == "/wonPerMatchPerYear1") {
      fs.readFile(
        "../Htmlfiles/wonPerMatchPerYear1.html",
        "utf-8",
        (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          }
        }
      );
    }
    //3. Extra runs conceded per team in 2016
    else if (req.url == "/teamExtraRuns") {
        fs.readFile("../Htmlfiles/teamExtraRuns.html", "utf-8", (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          }
        });
    }
    //4. Top 10 economical bowlers in 2015
    else if (req.url == "/top10bowlerEconomy") {
        fs.readFile(
          "../Htmlfiles/top10bowlerEconomy.html",
          "utf-8",
          (err, data) => {
            if (err) {
              console.error("file  does not exist");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(data);
              res.end();
            }
          }
        );
    }
    // 5.Find the number of times each team won the toss and also won the match
    else if (req.url == "/wonTossWonTeam") {
        fs.readFile("../Htmlfiles/wonTossWonTeam.html", "utf-8", (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          }
        });
    }
    //6.Find player per season who has won the highest number of Player of the Match awards
    else if (req.url == "/playerOfTheMatch1") {
        fs.readFile(
          "../Htmlfiles/playerOfTheMatch1.html",
          "utf-8",
          (err, data) => {
            if (err) {
              console.error("file  does not exist");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(data);
              res.end();
            }
          }
        );
    } 
    // 7.Find the strike rate of the batsman Virat Kohli for each season
    else if (req.url == "/viratKohliStrike") {
      fs.readFile(
        "../Htmlfiles/viratKohliStrike.html",
        "utf-8",
        (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });

            res.write(data);
            res.end();
          }
        }
      );
    }
    //8.Find the highest number of times one player has been dismissed by another player
    else if (req.url == "/playerDismissed") {
        fs.readFile("../Htmlfiles/playerDismissed.html", "utf-8", (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          }
        });
      }
    //  9.Find the bowler with the best economy in super overs
     else if (req.url == "/bestEconomy") {
      fs.readFile("../Htmlfiles/bestEconomy.html", "utf-8", (err, data) => {
        if (err) {
          console.error("file  does not exist");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });

          res.write(data);
          res.end();
        }
      });
    } else if (req.url == "/matchesPerYear") {
      fs.readFile("../output/matchesPerYear.json", "utf-8", (err, data) => {
        if (err) {
          console.error("file  does not exist");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });

          res.write(data);
          res.end();
        }
      });
    } else if (req.url == "/wonPerMatchPerteamYear") {
      fs.readFile(
        "../output/wonPerMatchPerteamYear.json",
        "utf-8",
        (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "application/json" });

            res.write(data);
            res.end();
          }
        }
      );
    } else if (req.url == "/extraRuns") {
      fs.readFile("../output/extraRuns.json", "utf-8", (err, data) => {
        if (err) {
          console.error("file  does not exist");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });

          res.write(data);
          res.end();
        }
      });
    } else if (req.url == "/top10EconomyBowler") {
      fs.readFile("../output/top10EconomyBowler.json", "utf-8", (err, data) => {
        if (err) {
          console.error("file  does not exist");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });

          res.write(data);
          res.end();
        }
      });
    } else if (req.url == "/wonTosswonMatch") {
      fs.readFile("../output/wonTosswonMatch.json", "utf-8", (err, data) => {
        if (err) {
          console.error("file  does not exist");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });

          res.write(data);
          res.end();
        }
      });
    } else if (req.url == "/playerOfTheMatch") {
      fs.readFile("../output/playerOfTheMatch.json", "utf-8", (err, data) => {
        if (err) {
          console.error("file  does not exist");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });

          res.write(data);
          res.end();
        }
      });
    } else if (req.url == "/viratKohliStrikeRate") {
      fs.readFile(
        "../output/viratKohliStrikeRate.json",
        "utf-8",
        (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "application/json" });

            res.write(data);
            res.end();
          }
        }
      );
    } else if (req.url == "/playerDismissedbyBowler") {
      fs.readFile(
        "../output/playerDismissedbyBowler.json",
        "utf-8",
        (err, data) => {
          if (err) {
            console.error("file  does not exist");
          } else {
            res.writeHead(200, { "Content-Type": "application/json" });

            res.write(data);
            res.end();
          }
        }
      );
    } else if (req.url == "/bestEconomyBowler") {
      fs.readFile("../output/bestEconomyBowler.json", "utf-8", (err, data) => {
        if (err) {
          i;
          console.error("file  does not exist");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });

          res.write(data);
          res.end();
        }
      });
    }else {
      res.writeHead(200, { "Content-Type": "text" });
      res.write("route does not exist");
      res.end();
    }
  })
  .listen(2000, () => {
    console.log("server started");
  });
