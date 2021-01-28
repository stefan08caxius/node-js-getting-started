const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');




express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send({username: 'pippo'}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

