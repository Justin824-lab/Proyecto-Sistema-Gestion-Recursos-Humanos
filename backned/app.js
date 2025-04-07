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
const EstadoCivilRoutes = require('./ruta/EstadoCivil');
const EtniaRoutes = require('./ruta/Etnia');
const ColorPeloRoutes = require('./ruta/ColorPelo');
const UbicacionRoutes = require('./ruta/Ubicacion');
const EstadoRoutes = require('./ruta/Estado');
const DepartamentoRoutes = require('./ruta/Departamento');
const ReqConocimientosRoutes = require('./ruta/ReqConocimientos');
const GrupoEscalaRoutes = require('./ruta/GrupoEscala');

const TrabajaEnRoutes = require('./ruta/TrabajaEn');
const PlantillaFuncionesRoutes = require('./ruta/Plantilla');
const CargoRequisitosRoutes = require('./ruta/CargoRequisitos');
const CargoNivelUtilizacionRoutes = require('./ruta/CargoNivelUtilizacion');
const OtrosPagosEmpleadosRoutes = require('./ruta/OtrosPagosEmpleados');
const TlaboralRoutes = require('./ruta/Tlaboral');
const CargoFuncionesRoutes = require('./ruta/CargoFunciones');



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
app.use('/api/NivelDeUtilizacion', NivelDeUtilizacionRoutes);
app.use('/api/OtrosPagos', OtrosPagosRoutes);
app.use('/api/NoResolucion', NoResolucionRoutes);
app.use('/api/CatOcupacional', CatOcupacionalRoutes);
app.use('/api/cFTPrincipales', cFTPrincipalesRoutes);
app.use('/api/Contrato', ContratoRoutes);
app.use('/api/Cargo', CargoRoutes);
app.use('/api/Empleados', EmpleadosRoutes);
app.use('/api/EstadoCivil', EstadoCivilRoutes);
app.use('/api/Etnia', EtniaRoutes);
app.use('/api/ColorPelo', ColorPeloRoutes);
app.use('/api/Ubicacion', UbicacionRoutes);
app.use('/api/Estado', EstadoRoutes);
app.use('/api/Departamento', DepartamentoRoutes);
app.use('/api/ReqConocimientos', ReqConocimientosRoutes);
app.use('/api/GrupoEscala', GrupoEscalaRoutes);
app.use('/api/TrabajaEn', TrabajaEnRoutes);
app.use('/api/Plantilla', PlantillaFuncionesRoutes);
app.use('/api/CargoRequisitos', CargoRequisitosRoutes);
app.use('/api/CargoNivelUtilizacion', CargoNivelUtilizacionRoutes);
app.use('/api/OtrosPagosEmpleados', OtrosPagosEmpleadosRoutes);
app.use('/api/Tlaboral', TlaboralRoutes);
app.use('/api/CargoFunciones', CargoFuncionesRoutes);


// archivos estaticos frontend
app.use(express.static(path.join(__dirname,'public')));


//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});
