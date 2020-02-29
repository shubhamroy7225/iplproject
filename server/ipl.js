module.exports = class Matches {
  constructor(jsonObj) {
    this.matchesData = jsonObj;
    this.obj1 = {}
    this.obj2 = {}
    this.obj3 = {}
    this.arrayofyear = []
    this.obj5 = {}
    //this.totalRuns = {}

  }

  //  1. Number of matches played per year for all the years in IPL. 
  searchIplData() {
    var arr = []
    for (let i in this.matchesData) {
      arr.push(this.matchesData[i].season)
    }
    var obj = {}
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1
      } else {
        obj[arr[i]] = 1
      }
    }
    var arr1 = [],resArray = []
    for(let i in obj){
      arr1.push(i)
      arr1.push(obj[i])
      resArray.push(arr1)
      arr1 = []
    }
    return resArray
  }

  //  2. Number of matches won of per team per year in IPL.
  wonPerMatch() {
    for (let i in this.matchesData) {
      if (this.obj1[this.matchesData[i].season]) {
        continue;
      } else {
        this.obj1[this.matchesData[i].season] = {}
      }
    }
    for (let i in this.matchesData) {
      if (this.obj1[this.matchesData[i].season][this.matchesData[i].winner]) {
        this.obj1[this.matchesData[i].season][this.matchesData[i].winner] += 1
      } else {
        this.obj1[this.matchesData[i].season][this.matchesData[i].winner] = 1
      }
    }
    return this.obj1
  }

  // 3. Extra runs conceded per team in 2016
  takeId() {
    var arr1 = []
    for (let i in this.matchesData) {
      if (this.matchesData[i].season === '2016') {
        arr1.push(this.matchesData[i].id)
      }
    }
    return arr1
  }
  searchExtraRuns(arr) {
    for (var i = 0; i < this.matchesData.length; i++) {
      var data1 = this.matchesData[i]
      if (arr.indexOf(data1.match_id) >= 0) {
        if (this.obj2.hasOwnProperty([data1.bowling_team])) {
          this.obj2[data1.bowling_team] += parseInt(data1.extra_runs)
        } else {
          this.obj2[data1.bowling_team] = parseInt(data1.extra_runs)
        }
      }
    }
    var arr1 = [],resArray = []
    for(let i in this.obj2){
      arr1.push(i)
      arr1.push(this.obj2[i])
      resArray.push(arr1)
      arr1 = []
    }
    return resArray
  }

  // 4. Top 10 economical bowlers in 2015
  getMatchIdOfSpecificYear() {
    var arr = [], year = '2015'
    this.matchesData.filter(function (data) {
      if (data.season == year) {
        arr.push(data.id)
      }
    })
    return arr
  }

  top10economicalBowlers(array) {
    var bowlereconomy = {}
    var start1 = array[0], end1 = array[array.length - 1]
    this.matchesData.map(function (data3) {
      if (data3.match_id >= parseInt(start1) && data3.match_id <= parseInt(end1)) {
        if (bowlereconomy.hasOwnProperty(data3.bowler)) {
          bowlereconomy[data3.bowler]['total_runs'] += parseInt(data3.batsman_runs)
            + parseInt(data3.noball_runs) + parseInt(data3.wide_runs)
          if (parseInt(data3.noball_runs) == 0 && parseInt(data3.wide_runs) == 0) {
            bowlereconomy[data3.bowler]['total_balls'] += 1
          }
        } else {
          bowlereconomy[data3.bowler] = {}
          bowlereconomy[data3.bowler]['total_runs'] = parseInt(data3.batsman_runs)
            + parseInt(data3.noball_runs) + parseInt(data3.wide_runs)
          if (parseInt(data3.noball_runs) == 0 && parseInt(data3.wide_runs) == 0) {
            bowlereconomy[data3.bowler]['total_balls'] = 1
          } else {
            bowlereconomy[data3.bowler]['total_balls'] = 0
          }
        }
      }
    })
    let arr5 = [];
    for (let k in bowlereconomy) {
      let economicRate = (((bowlereconomy[k]['total_runs']) / (bowlereconomy[k]['total_balls']) / 6));
      let obj = {
        bowler: k,
        y: economicRate
      }
      arr5.push(obj);
    }
    arr5.sort(function (a, b) {
      return a.y - b.y;
    })
    var resobj4 = []
    for(var i = 0; i  < 10; i++){
      resobj4.push(arr5[i])
    }
    //return resobj4
    var arr1 = [],resArray = []
    for(let i = 0; i < resobj4.length; i++){
      for(let j in resobj4[i]){
      arr1.push(resobj4[i][j])
    }
      resArray.push(arr1)
      arr1 = []
  }
    return resArray
  }



  // 5.Find the number of times each team won the toss and also won the match
  wonTheTossAndWonTheMatch() {
    var obj4 = {}
    for (var i in this.matchesData) {
      if (obj4.hasOwnProperty(this.matchesData[i].toss_winner)) {
        if (this.matchesData[i].toss_winner === this.matchesData[i].winner) {
          obj4[this.matchesData[i].toss_winner] += 1
        }
      } else {
        if (this.matchesData[i].toss_winner === this.matchesData[i].winner) {
          obj4[this.matchesData[i].toss_winner] = 1
        }
      }
    }
    var arr1 = [],resArray = []
    for(let i in obj4){
      arr1.push(i)
      arr1.push(obj4[i])
      resArray.push(arr1)
      arr1 = []
    }
    return resArray
  }

  //6.Find player per season who has won the highest number of Player of the Match awards
  playerOfThematch() {
    var resobj = {}
    var year = 2008
    for (let s = 0; s <= 9; s++) {
      this.obj5 = {}
      for (let j in this.matchesData) {
        if (this.matchesData[j].season == year) {
          this.arrayofyear.push(this.matchesData[j].id)
        }
      }
      var t = 0
      for (var i in this.matchesData) {
        if (this.matchesData[i].id === this.arrayofyear[t]) {
          if (this.obj5.hasOwnProperty([this.matchesData[i].player_of_match])) {
            this.obj5[this.matchesData[i].player_of_match] += 1
          } else {
            this.obj5[this.matchesData[i].player_of_match] = 1
          }
          t++
        }

      }
      var res = (Object.keys(this.obj5).reduce((a, b) => this.obj5[a] > this.obj5[b] ? a : b))
      const max = Math.max.apply(null, Object.values(this.obj5));
      this.arrayofyear = []
      resobj[year] = {}
      resobj[year][res] = max

      year += 1
    }
    return resobj
  }



  // 7.Find the strike rate of the batsman Virat Kohli for each season
  takeid1() {
    var idPerSeason = [], year = '2008'
    for (let i = 0; i < 10; i++) {
      var arr = []
      this.matchesData.filter(function (data) {
        if (data.season == year) {
          arr.push(data.id)
        }
      })
      year++
      idPerSeason.push(arr)
    }
    return idPerSeason
  }
  viratKohliPerSeasonStrikeRate(array) {
    var totalRuns = {}, resObj = {}, year = 2008
    for (let s = 0; s <= 9; s++) {
      var a = array[s]
      var start = a[0], end = a[a.length - 1]
      this.matchesData.map(function (data) {
        if (data.match_id >= parseInt(start) && data.match_id <= parseInt(end)) {
          if (data.batsman === 'V Kohli') {
            if (totalRuns.hasOwnProperty(data.batsman)) {
              totalRuns[data.batsman]['total_runs'] += parseInt(data.batsman_runs)
              if (parseInt(data.noball_runs) === 0 && parseInt(data.wide_runs) === 0)
                totalRuns[data.batsman]['total_balls'] += 1
            }
            else {
              totalRuns[data.batsman] = {}
              totalRuns[data.batsman]['total_runs'] = parseInt(data.batsman_runs)
              if (parseInt(data.noball_runs) === 0 && parseInt(data.wide_runs) === 0) {
                totalRuns[data.batsman]['total_balls'] = 1
              } else {
                totalRuns[data.batsman]['total_balls'] = 0
              }
            }
          }
        }
      })
      var res = parseFloat(((totalRuns['V Kohli']['total_runs'] / totalRuns['V Kohli']['total_balls']) * 100).toFixed(2))
      resObj[year] = res
      year++
      totalRuns = {}
    }
    var arr1 = [],resArray = []
    for(let i in resObj){
      arr1.push(i)
      arr1.push(resObj[i])
      resArray.push(arr1)
      arr1 = []
    }
    return resArray
  }

  // 8.Find the highest number of times one player has been dismissed by another player   
  playerdismissed() {
    var dismissedplayer = {}, arrayofObj = []
    this.matchesData.map(function (data) {
      if (data.player_dismissed != '') {
        if (dismissedplayer.hasOwnProperty(data.player_dismissed)) {
          if (dismissedplayer[data.player_dismissed].hasOwnProperty(data.bowler)) {
            dismissedplayer[data.player_dismissed][data.bowler] += 1
          } else {
            dismissedplayer[data.player_dismissed][data.bowler] = 1
          }
        } else {
          dismissedplayer[data.player_dismissed] = {}
          dismissedplayer[data.player_dismissed][data.bowler] = 1
        }
      }
    })
    var posi = 0, posj = 0
    var max = 0, value = 0, resobj1 = {}
    for (let i in dismissedplayer) {
      for (let j in dismissedplayer[i]) {
        value = dismissedplayer[i][j]
        if (max < value) {
          max = dismissedplayer[i][j]
          posi = i
          posj = j
        }
      }
    }
    return { 'batsman': posi, 'bowler': posj, 'num': max }
  }

  //  9.Find the bowler with the best economy in super overs
  bestEconomyBowler() {
    var superovereconomy = {}
    this.matchesData.map(function (data1) {
      if (data1.is_super_over != 0) {
        if (superovereconomy.hasOwnProperty(data1.bowler)) {
          superovereconomy[data1.bowler]['total_runs'] += parseInt(data1.batsman_runs)
            + parseInt(data1.noball_runs) + parseInt(data1.wide_runs)
          if (parseInt(data1.noball_runs) === 0 && parseInt(data1.wide_runs) === 0) {
            superovereconomy[data1.bowler]['total_balls'] += 1
          }
        } else {
          superovereconomy[data1.bowler] = {}
          superovereconomy[data1.bowler]['total_runs'] = parseInt(data1.batsman_runs)
            + parseInt(data1.noball_runs) + parseInt(data1.wide_runs)
          if (parseInt(data1.noball_runs) === 0 && parseInt(data1.wide_runs) === 0) {
            superovereconomy[data1.bowler]['total_balls'] = 1
          } else {
            superovereconomy[data1.bowler]['total_balls'] = 0
          }
        }
      }
    })
    var rseobj2 = {}
    for (var i in superovereconomy) {
      rseobj2[i] = (superovereconomy[i]['total_runs'] / (superovereconomy[i]['total_balls'] / 6))
    }
    var max1 = Infinity, val = 0, resobj2 = {}, pos = ''
    for (var i in rseobj2) {
      val = rseobj2[i]
      if (val < max1) {
        max1 = val
        pos = i
      }
    }
    resobj2[pos] = max1
    var arr1 = [],resArray = []
    for(let i in resobj2){
      arr1.push(i)
      arr1.push(resobj2[i])
      resArray.push(arr1)
      arr1 = []
    }
    return resArray
  }

};
