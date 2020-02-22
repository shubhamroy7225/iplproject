module.exports = class Matches {
    constructor(jsonObj) {
      this.matchesData = jsonObj;
      this.obj1 = {}
      this.obj2 ={}
      this.obj3 = {}
      this.arrayofyear = []
      this.obj5 = {}
      
    }
  
    searchIplData() {
    var arr = []
    for(let i in this.matchesData){
        arr.push(this.matchesData[i].season)
    }
    var obj = {}
    for(let i = 0; i < arr.length; i++){
       if(obj[arr[i]]){
       obj[arr[i]] += 1
        }else{
     obj[arr[i]] = 1
    }
   }
   return obj
    }
  wonPerMatch() {
      for(let i in this.matchesData){
        if(this.obj1[this.matchesData[i].season]){
          continue;
        }else{
          this.obj1[this.matchesData[i].season]= {}
        }
        
      }
      for(let i in this.matchesData){
        if(this.obj1[this.matchesData[i].season][this.matchesData[i].winner]){
          this.obj1[this.matchesData[i].season][this.matchesData[i].winner] +=1
        }else{
          this.obj1[this.matchesData[i].season][this.matchesData[i].winner] = 1
        }
      }
      return this.obj1
    }

    takeId(){
      var arr1 = []
      for(let i in this.matchesData){
        if(this.matchesData[i].season === '2016'){
          arr1.push(this.matchesData[i].id)
        }
      }
      return  arr1
    }
     searchExtraRuns(arr){
       //console.log(arr)
       //console.log(this.matchesData)
      for(var i = 0; i < this.matchesData.length; i++){
        var data1 = this.matchesData[i]
       //console.log(this.matchesData[i])
        if(arr.indexOf(data1.match_id) >= 0){
          if(this.obj2.hasOwnProperty([data1.bowling_team])){
           this.obj2[data1.bowling_team] += parseInt(data1.extra_runs)
          }else{
            this.obj2[data1.bowling_team] = parseInt(data1.extra_runs)
          }
         // console.log(this.matchesData[i].match_id)
        }
     }
     return this.obj2
  }
  


  getMatchIdOfSpecificYear(){
          //console.log(this.matchesData)
          var arr1 = [],array = []
          for(let i in this.matchesData){
            if(this.matchesData[i].season === '2015'){
              arr1.push(this.matchesData[i].id)
            }
          }
          array.push(arr1[0]);
          array.push(arr1[arr1.length - 1]);
          return arr1
  }

  top10economicalBowlers(array1){
    var bowlerRun = {}
      for(let i in this.matchesData){   
      if (array1.indexOf(this.matchesData[i].match_id != -1)){
          if (bowlerRun.hasOwnProperty(this.matchesData[i].bowler)) {
              bowlerRun[this.matchesData[i].bowler]['total_runs'] += parseInt(this.matchesData[i].batsman_runs)
              +parseInt(this.matchesData[i].noball_runs)+parseInt(this.matchesData[i].wide_runs);
              if (this.matchesData[i].noball_runs == "0" && this.matchesData[i].wide_runs == "0") {
                  bowlerRun[this.matchesData[i].bowler]['total_balls'] +=1;
              }
           }else{
            bowlerRun[this.matchesData[i].bowler] = {}
            bowlerRun[this.matchesData[i].bowler]['total_runs'] = parseInt(this.matchesData[i].batsman_runs)
              +parseInt(this.matchesData[i].noball_runs)+parseInt(this.matchesData[i].wide_runs);
              if (this.matchesData[i].noball_runs == "0" && this.matchesData[i].wide_runs == "0") {
                  bowlerRun[this.matchesData[i].bowler]['total_balls'] =1;
              }else{
                bowlerRun[this.matchesData[i].bowler]['total_balls'] =0;
            }
           }
      }
  }
  let arr5 = [];
      for (let k in bowlerRun) {
        // (bowlerRun[k]['total_runs']/bowlerRun[k]['total_balls'])
            let economicRate = (((bowlerRun[k]['total_runs'])/(bowlerRun[k]['total_balls']))*6);
            let obj = {
                 y: economicRate,
                 bowler: k
              }
               arr5.push(obj);
            }
          //console.log(economicRate)
    
   arr5.sort(function (a, b) {
      return a.y - b.y;
 })
  console.log(arr5)
  //console.log(bowlerRun)
  }


wonTheTossAndWonTheMatch(){
  console.log(this.matchesData)
  var obj4 = {}
  for(var i in this.matchesData){
    if(obj4.hasOwnProperty(this.matchesData[i].toss_winner)){
      if(this.matchesData[i].toss_winner === this.matchesData[i].winner){
        obj4[this.matchesData[i].toss_winner] +=1
        
      }
    }else{
      if(this.matchesData[i].toss_winner === this.matchesData[i].winner){
        obj4[this.matchesData[i].toss_winner] =1
        
      }
    }
  }
  return obj4
}


playerOfTheatch(){
  
  //console.log(this.matchesData)
  var year = '2008'
         for(let s = 0; s <= 9; s++){ 
           this.obj5 = {}
          for(let j in this.matchesData){
            if(this.matchesData[j].season == year){
              this.arrayofyear.push(this.matchesData[j].id)
            }
          }
          var t = 0
          for(var i in this.matchesData){
            if(this.matchesData[i].id === this.arrayofyear[t]){
            if(this.obj5.hasOwnProperty([this.matchesData[i].player_of_match])){
              this.obj5[this.matchesData[i].player_of_match] += 1
            }else{
              this.obj5[this.matchesData[i].player_of_match] = 1
            }
            t++
          }
        
      }
      //console.log(Object.keys(this.obj5).reduce((a, b) => this.obj5[a] > this.obj5[b] ? a : b))
      console.log(this.obj5)
      year++
    }
      
    }
};
