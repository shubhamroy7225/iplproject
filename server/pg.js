const csv = require("csvtojson");
const csvFilePath = "../data/matches.csv";
const csvFilePath2='../data/deliveries.csv'
const { Client } = require("pg");
// const pool = new Pool({
//   user: 'shubham',
//   host: 'localhost',
//   database: 'ipldata',
//   password: 'shubham@123',
//   port: 5432,
// })
// pool.query('SELECT * FROM data', (err, res) => {
//   console.log(err, res.rows)
//   pool.end()
// })
const client = new Client({
  user: "shubham",
  host: "localhost",
  database: "ipldata3",
  password: "shubham@123",
  port: 5432
});
client.connect();
csv({checkType:true})
  .fromFile(csvFilePath)
  .then(jsonObj => {
  //     var key = Object.keys(jsonObj[0])
  //     var keytype = key.map((key1)=> typeof(jsonObj[0][key1]))
  //     var matchesfield = '('
  //     for(let i = 0; i < key.length; i++){
  //       matchesfield += key[i]+' '
  //       if(i == key.length-1){
  //         if(keytype[i] === 'number'){
  //           matchesfield += 'int'
  //         }
  //         if(keytype[i] === 'string'){
  //           matchesfield += 'varchar'
  //         }
  //         matchesfield += ')'
  //         break
  //       }
  //       if(keytype[i] === 'number'){
  //         matchesfield += 'int,'
  //       }
  //       if(keytype[i] === 'string'){
  //         matchesfield += 'varchar,'
  //       }
  // }
  // console.log(matchesfield)
  // client.query('CREATE TABLE IF NOT EXISTS matches'+matchesfield+';',
  //       ( res,err) => {
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           console.log("created table");
  //         }
  //       }
  //     );

  // for (let i = 0; i < jsonObj.length; i++) {
  //     client.query('INSERT INTO  matches VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)',
  //       Object.values(jsonObj[i]),
  //       (err) => {
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           console.log("inserted table");
  //         }
  //       }
  //     );
  //   }

  csv({checkType:true})
    .fromFile(csvFilePath2)
    .then(jsonObj => {
      var key = Object.keys(jsonObj[0])
      var keytype = key.map((key1)=> typeof(jsonObj[0][key1]))
      var matchesfield = '('
      for(let i = 0; i < key.length; i++){
        matchesfield += key[i]+' '
        if(i == key.length-1){
          if(keytype[i] === 'number'){
            matchesfield += 'int'
          }
          if(keytype[i] === 'string'){
            matchesfield += 'varchar'
          }
          matchesfield += ')'
          break
        }
        if(keytype[i] === 'number'){
          matchesfield += 'int,'
        }
        if(keytype[i] === 'string'){
          matchesfield += 'varchar,'
        }
  }
  console.log(matchesfield)
  client.query('CREATE TABLE IF NOT EXISTS deliveries'+matchesfield+';',
        ( res,err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("created table");
          }
        }
      );

  for (var i = 0; i < jsonObj.length; i++) {
      client.query('INSERT INTO  deliveries VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)',
        Object.values(jsonObj[i]),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("inserted table");
          }
        }
      );
    }

    });
});

// client.query('SELECT * FROM matches', (err, res) => {
//   console.log(err, res.rows)
//   client.end()
// })
