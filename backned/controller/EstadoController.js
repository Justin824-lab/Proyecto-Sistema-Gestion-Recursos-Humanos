const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from Estado',(err,Estado) =>{
            if(err){
                res.json(err);
            }
            res.json(Estado);
        });

    });

};

controller.edit = (req, res) => {

    const {IdEstado}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from Estado where IdEstado=?', [IdEstado], (err,Estado) => {
            res.json(Estado[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into Estado set?', [data], (err,Estado) => {
        res.json(Estado);
       });
   })
};

controller.update = (req,res) =>{

    const {IdEstado}= req.params;
    const nuevo_Estado = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update Estado set ? where IdEstado =?', [nuevo_Estado, IdEstado], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {IdEstado}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from Estado where IdEstado =?', [IdEstado], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
