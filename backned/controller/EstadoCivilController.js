const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from EstadoCivil',(err,EstadoCivil) =>{
            if(err){
                res.json(err);
            }
            res.json(EstadoCivil);
        });

    });

};

controller.edit = (req, res) => {

    const {IdCivil}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from EstadoCivil where IdCivil=?', [IdCivil], (err,EstadoCivil) => {
            res.json(EstadoCivil[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into EstadoCivil set?', [data], (err,EstadoCivil) => {
        res.json(EstadoCivil);
       });
   })
};

controller.update = (req,res) =>{

    const {IdCivil}= req.params;
    const nuevo_EstadoCivil = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update EstadoCivil set ? where IdCivil =?', [nuevo_EstadoCivil, IdCivil], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {IdCivil}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from EstadoCivil where IdCivil =?', [IdCivil], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
