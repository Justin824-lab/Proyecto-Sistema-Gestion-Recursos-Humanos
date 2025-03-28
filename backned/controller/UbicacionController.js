const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from Ubicacion',(err,Ubicacion) =>{
            if(err){
                res.json(err);
            }
            res.json(Ubicacion);
        });

    });

};

controller.edit = (req, res) => {

    const {IdUbicacion}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from Ubicacion where IdUbicacion=?', [IdUbicacion], (err,Ubicacion) => {
            res.json(Ubicacion[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into Ubicacion set?', [data], (err,Ubicacion) => {
        res.json(Ubicacion);
       });
   })
};

controller.update = (req,res) =>{

    const {IdUbicacion}= req.params;
    const nuevo_Ubicacion = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update Ubicacion set ? where IdUbicacion =?', [nuevo_Ubicacion, IdUbicacion], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {IdUbicacion}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from Ubicacion where IdUbicacion =?', [IdUbicacion], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
