var express  = require("express"),
app      = express(),
http     = require("http"),
server   = http.createServer(app),
bodyParser  = require("body-parser"),
methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
// Add headers
app.use(function (req, res, next) {
// Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
// Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
// Pass to next layer of middleware
    next();
});
var router = express.Router();

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


router.post('/api/create-update-association', function(req, res) {

        let asociacion = req.param('asociacion');

        let asociacion_values = [asociacion.id_asociacion,asociacion.descripcion,asociacion.nit,
                                 asociacion.presidente,asociacion.municipio,asociacion.departamento,
                                 asociacion.vereda,asociacion.direccion,asociacion.telefono,
                                 asociacion.email,1,1,asociacion.id_user,
                                 asociacion.username,asociacion.password]

                        /* postgre  ---> conexion */
                                          pool.connect((err, db, done) => {

                                                    // Call `done(err)` to release the client back to the pool (or destroy it if there is an error)
                                                    done();
                                                    if(err){console.error('error open connection', err);}
                                                    else {
                                                        db.query('select * from spd_create_update_association($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)',
                                                            [...asociacion_values], (err, table) => {
                                                            if(err) {
                                                                console.error('error running query', err);
                                                            }
                                                            else {
                                                                res.status(201).send({ message: 'Data Inserted! '+table.rows[0].out_result})
                                                            }
                                                        })
                                                    }
                                          });

});/* Create update - associations */

router.post('/api/read-association', function(req, res) {

        pool.connect(function(err,db,done){
      			if(err) {
      				return console.error('error fetching associations from pool', err);
      			}
      			db.query('select * from tbl_association', function(err, table) {
      	    		//call `done()` to release the client back to the pool
      	    		done();
      	    		if(err) {
      	    			return console.error('error running query', err);
      	    		}
      	        	res.send({ associations: table.rows });
      	    	});
      		});/* postgreSql  ---> conexion */

});/* read - associations */

router.post('/api/login', function(req, res) {

      let user = req.param('user');
      let user_values = [user.username,user.pass]


            pool.connect(function(err,db,done){
                  db.query('select * from spd_login($1,$2)',
                      [...user_values], (err, table) => {
                      if(err) {
                          console.error('error running query', err)
                      }
                      else {
                          res.status(201).send({ rows: table.rows})
                      }
                  })
          		});/* postgreSql  ---> conexion */


});/* read - login */

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
