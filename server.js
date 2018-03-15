
import App from './views/src/app';

  var express = require('express'),
      http = require('http'),
      path       = require('path'),
      cors = require('cors'),
      bodyParser, require('body-parser'),
      cons = require('consolidate'),
      app = express();

      var port = 8000;

      app.use(cors())
      //app.use(express.static('./public/'))
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({ extended: true }))

      /* postgreSql */
             const pg = require('pg');
             let pool = new pg.Pool({
                    user:'zero',
                    database: 'db_tiendabio',
                    password:'abcd.1234',
                    port :8485,
                    ssl: false,
                    max: 20, //set pool max size to 20
                    min: 4, //set min pool size to 4
                    idleTimeoutMillis: 1000 //close idle clients after 1 second
                });
      /* postgreSql */


var server = http.createServer(app).listen(port, function() {
   console.log("Listening on " + port);
});

/* socket */
const io = engine.listen(server);


io.on('connection', (socket) => {

          /*  request('https://randomuser.me/api/',(err, response, body) => {
                io.emit('people', body);
            }); */

                console.log('Conexion con socket!');

                socket.on('read', () => {
                    console.log('Read... socket!');
                    //data.unshift(sign);
                          io.emit('data',{prueba:"Valor retornado desde... server..."});/* Regresamos la data para pintarla */
                });/* socket : read */

});
/* Server ---- socket */



/* */
