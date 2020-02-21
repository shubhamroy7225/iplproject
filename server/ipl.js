module.exports = class Matches {
    constructor(jsonObj) {
      this.matchesData = jsonObj;
      this.obj1 = {}
      this.obj2 ={}
      
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
  };