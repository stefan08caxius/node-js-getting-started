const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'sql7.freemysqlhosting.net',
  port: 3306,
  user: 'sql7389367',
  password: 'edFV3gSUZ6',
  database: 'sql7389367'
});

connection.connect(function(err) {

  if (err) {
      return console.error('error: ' + err.message);
  }

    // parse requests of content-type - application/json
    app.use(bodyParser.json());

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
/*
    app
      .use(express.static(path.join(__dirname, 'public')))
      .set('views', path.join(__dirname, 'views'))
      .set('view engine', 'ejs')
      .get('/cool', (req, res) => {
        connection.query("SELECT * FROM 'user';" , function (err, risp_tempo) {
            if (err) throw err;
            if(risp_tempo.length === 1){
                res.send(risp_tempo);
            } else {
              res.send('risp_tempo');
            }
        })
        })
      .listen(PORT, () => console.log(`Listening on ${ PORT }`))
      */
})
