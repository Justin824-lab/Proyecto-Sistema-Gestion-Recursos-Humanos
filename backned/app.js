const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql');
const cors = require('cors');
const myConnection= require('express-myconnection');
const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};
// prueba carmen
app.use(cors(
    config.application.cors.server
  ));



// rutas backend
const NivelDeUtilizacionRoutes = require('./ruta/NiveldeUtilizacion');
const OtrosPagosRoutes = require('./ruta/OtrosPagos');
const NoResolucionRoutes = require('./ruta/NoResolucion');
const CatOcupacionalRoutes = require('./ruta/CatOcupacional');
const cFTPrincipalesRoutes = require('./ruta/cFTPrincipales');
const ContratoRoutes = require('./ruta/Contrato');
const CargoRoutes = require('./ruta/Cargo');
const EmpleadosRoutes = require('./ruta/Empleados');



app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'rojo123',
    port:3306,
    database:'RecursosLaborales'
}, 'single'));
app.use(express.urlencoded({extended: false}));

var bodyParser = require('body-parser');
 // create application/json parser
app.use(bodyParser.json());

//Rutas frontend
app.use('/api/Empleados', EmpleadosRoutes);

// archivos estaticos frontend
app.use(express.static(path.join(__dirname,'public')));


//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});
